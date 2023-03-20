import React, { useState } from 'react';
import axios from 'axios';

const CreateUrlForm: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

 
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/createUrl', null, {
        params: {
          url: originalUrl,
        },
      });

      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error creating short URL:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(event) => setOriginalUrl(event.target.value)}
          required
        />
        <button type="submit">Create Short URL</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
    </div>
  );
};

export default CreateUrlForm;
