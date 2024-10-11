import React, { useEffect } from 'react';
import { useQueryCall } from '@ic-reactor/react';
import '../App.css';

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
    <div className="file-list bg-white p-6 rounded-lg shadow-md interactive">
      <h2 className="text-2xl font-bold mb-4 text-interactive">Files</h2>
      {files ? (
        <ul className="space-y-3">
          {files.map((name: string, index: number) => (
            <li key={index} className="flex items-center justify-between py-2 px-4 rounded hover:bg-gray-200 transition interactive">
              <div className="flex items-center">
                <i className="fas fa-file-alt text-gray-600 mr-3"></i> {/* File Icon */}
                <span className="text-lg text-gray-800">{name}</span>
              </div>
              <button
                onClick={() => handleDownload(index)}
                className="download-button bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 interactive"
              >
                <i className="fas fa-download mr-2"></i>Download
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Loading files...</p>
      )}
    </div>
  );
};

export default FileList;