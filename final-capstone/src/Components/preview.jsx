import { useEffect, useState } from 'react';

const Preview = () => {
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [hoveredImage, setHoveredImage] = useState(null);
  const [showMore, setShowMore] = useState({});

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

  const sortPreviews = () => {
    const sortedPreviews = [...previews];
    if (sortOrder === 'asc') {
      sortedPreviews.sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated));
    } else {
      sortedPreviews.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    }
    setPreviews(sortedPreviews);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleImageHover = (id) => {
    setHoveredImage(id);
  };

  const handleShowMore = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='size'>
      <h1>Podcast Previews</h1>
      <div>
        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" onChange={handleSortChange} value={sortOrder}>
          <option value="asc">Date Updated (Ascending)</option>
          <option value="desc">Date Updated (Descending)</option>
        </select>
      </div>
      <ul className='layout'>
        {previews.map((preview) => (
          <li key={preview.id} className={hoveredImage === preview.id ? 'hovered' : ''}>
            {/* Display the podcast image */}
            <img
              src={preview.image}
              className='image'
              alt={`Preview of ${preview.title}`}
              onClick={() => handleImageHover(preview.id)}
            />
            <h3>{preview.title}</h3>
            <p>{preview.description}</p>
            <p>Seasons: {preview.seasons}</p>
            <p>Last Updated: {preview.lastUpdated}</p>
            <p>Genres: {preview.genres.join(', ')}</p>
            <button onClick={() => handleShowMore(preview.id)}>
              {showMore[preview.id] ? 'Show Less' : 'Show More'}
            </button>
            {showMore[preview.id] && <p>description</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
