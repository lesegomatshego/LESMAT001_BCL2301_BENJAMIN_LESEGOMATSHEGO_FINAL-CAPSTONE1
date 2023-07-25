import React, { useEffect, useState } from 'react';

const Preview = () => {
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API to get show previews
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setPreviews(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching previews:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Podcast Previews</h1>
      <ul>
        {previews.map((preview) => (
          <li key={preview.id}>
            {/* Display the podcast image */}
            <img src={preview.image} className='image' alt={`Preview of ${preview.title}`} />
            <h3>{preview.title}</h3>
            <p> {preview.description}</p>
            <p>Seasons: {preview.seasons}</p>
            <p>Last Updated: {preview.lastUpdated}</p>
            <p>Genres: {preview.genres.join(', ')}</p>
            {/* Add link to view full details of the show */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
