import React from 'react'
import { useState, useEffect } from 'react'

const Image = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        const url = 'https://picsum.photos/v2/list';
  
        try {
          const response = await fetch(url);
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Fetched data:', data);
          setPhotos(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error);
          setLoading(false);
        }
      };
  
      fetchPhotos();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Photo List</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {photos.map(photo => (
            <div key={photo.id} style={{ margin: '10px' }}>
              <img src={photo.download_url} alt={photo.author} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Image;
