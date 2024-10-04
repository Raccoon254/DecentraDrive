import React, { useState } from 'react';
import { useUpdateCall } from '@ic-reactor/react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const { call: uploadFile, loading } = useUpdateCall({
    functionName: 'uploadFile',
    onSuccess: () => {
      alert('File uploaded successfully!');
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      await uploadFile([file.name, Array.from(uint8Array)]);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} disabled={loading} />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default FileUpload;