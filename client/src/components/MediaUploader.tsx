import React, { useState } from 'react';

const MediaUploader: React.FC<{ onUpload: (files: File[]) => void }> = ({ onUpload }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles(filesArray);
        }
    };

    const handleUpload = () => {
        onUpload(selectedFiles);
        setSelectedFiles([]);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <div>
                {selectedFiles.map((file, index) => (
                    <p key={index}>{file.name}</p>
                ))}
            </div>
        </div>
    );
};

export default MediaUploader;