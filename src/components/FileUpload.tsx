import React, { useState } from 'react';
import { useUpdateCall } from '@ic-reactor/react';

const FileUpload: React.FC<{ onUploadSuccess: () => void }> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { call: uploadFile, loading } = useUpdateCall({
    functionName: 'uploadFile',
    onSuccess: () => {
      setFile(null);
      setIsModalOpen(false);
      onUploadSuccess();
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setIsModalOpen(true);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      await uploadFile([file.name, Array.from(uint8Array)]);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 left-8 z-10">
        <label htmlFor="file-upload" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 cursor-pointer shadow-lg transition-colors">
          <i className="fas fa-upload text-2xl"></i>
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
          disabled={loading}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Confirm Upload</h3>
            <p className="mb-4 text-gray-300">Do you want to upload {file?.name}?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Uploading...
                  </>
                ) : (
                  'Upload'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUpload;