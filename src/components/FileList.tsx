import React, { useEffect, useState } from 'react';
import { useQueryCall } from '@ic-reactor/react';

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
    <div className="file-list">
      <h2>Files</h2>
      {files ? (
        <ul>
          {files.map((name: string, index: number) => (
            <li key={index}>
              {name}
              <button onClick={() => handleDownload(index)}>Download</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading files...</p>
      )}
    </div>
  );
};

export default FileList;