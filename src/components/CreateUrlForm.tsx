import React, { useState } from 'react';
import axios from 'axios';
import "../styles/CreateUrlForm.css"

const CreateUrlForm: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const apiUrl = process.env.REACT_APP_API_URL

    try {
      const response = await axios.post(`${apiUrl}/api/createUrl`, null, {
        params: {
          url: originalUrl,
        },
      })

      setShortUrl(response.data.shortUrl)
    } catch (error) {
      console.error('Error creating short URL:', error)
    }
  }

  return (
    <div className="form-container">
      <h1>TinyURL Clone</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="url-input"
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
          <p>Your Short URL: <a href={`${process.env.REACT_APP_API_URL}/${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
      <footer className="url-footer">
        <p>
          &copy; {new Date().getFullYear()} Yazan Musleh. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CreateUrlForm;
