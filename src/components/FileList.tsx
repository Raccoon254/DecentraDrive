import React, { useEffect } from 'react';
import { useQueryCall } from '@ic-reactor/react';
import { getFileType } from '../utils/fileHelpers';

const FileList: React.FC = () => {
  const { call: listFiles, data: files } = useQueryCall({
    functionName: 'listFiles',
  });
  const { call: getFile } = useQueryCall({
    functionName: 'getFile',
  });

  useEffect(() => {
    listFiles();
  }, []);

  const handleDownload = async (index: number) => {
    const result = await getFile([index]);
    if (result && result[0]) {
      const [name, content] = result[0];
      const blob = new Blob([new Uint8Array(content)]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      alert('File not found.');
    }
  };

  return (
    <div className="rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-300 mb-6">
        <i className="fas fa-folder-open mr-3 text-blue-400"></i> Files
      </h2>
      {files ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((name: string, index: number) => (
            <div key={index} className="bg-gray-900 interactive bg-opacity-30 ring-2 ring-offset-2 ring-gray-800 ring-offset-slate-950 p-4 rounded-xl shadow-md hover:bg-gray-950 transition-colors">
              <div className="flex items-center mb-3">
                <i className={`fas fa-${getFileIconClass(getFileType(name))} text-blue-300 text-2xl mr-3`}></i>
                <span className="flex-grow text-gray-200 truncate">{name}</span>
              </div>
              <div className="flex justify-end">
              <button 
                className="w-1/3 bg-blue-600 interactive hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                onClick={() => handleDownload(index)}
              >
                <i className="fas fa-download mr-2"></i> Download
              </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 flex center flex-col italic">
          <div className='center'>
          <span className="loading loading-ring text-center loading-lg"></span>
          </div>
          Loading files...
        </div>
      )}
    </div>
  );
};

const getFileIconClass = (fileType: string): string => {
  switch (fileType) {
    case 'image': return 'file-image';
    case 'video': return 'file-video';
    case 'archive': return 'file-archive';
    case 'pdf': return 'file-pdf';
    case 'word': return 'file-word';
    case 'excel': return 'file-excel';
    default: return 'file';
  }
};

export default FileList;