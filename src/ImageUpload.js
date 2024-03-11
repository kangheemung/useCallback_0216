import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  // CSRF対策のためのトークンを取得する
  const getCsrfToken = () => {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('ファイルを選択してください');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('/api/v1/images', formData, {
        headers: {
          'X-CSRF-Token': getCsrfToken(), // CSRFトークンをヘッダに設定
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image Uploaded', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">アップロード</button>
      </form>
    </div>
  );
}

export default ImageUpload;
