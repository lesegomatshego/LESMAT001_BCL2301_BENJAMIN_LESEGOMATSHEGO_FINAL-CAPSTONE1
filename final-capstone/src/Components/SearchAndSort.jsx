import React from 'react';

const SearchAndSort = ({ searchQuery, handleSearchChange, sortBy, handleSortChange }) => {
  const genreTitleMapping = {
    1: 'Personal Growth',
    2: 'True Crime and Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  };

  return (
    <div className="search-and-sort">
      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by title..."
      />

      {/* Filter by Genre select */}
      <div>
        <h3>Filter by Genre:</h3>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {Object.entries(genreTitleMapping).map(([genreId, genreTitle]) => (
            <option key={genreId} value={genreId}>
              {genreTitle}
            </option>
          ))}
        </select>
      </div>

      {/* SortBy select */}
      <select value={sortBy} onChange={handleSortChange}>
        <option value="choose">Choose</option>
        <option value="date">Sort by Date (A-Z)</option>
        <option value="date-az">Sort by Date (Z-A)</option>
        <option value="title">Sort by Title (A-Z)</option>
        <option value="title-az">Sort by Title (Z-A)</option>
      </select>
    </div>
  );
};

export default SearchAndSort;
