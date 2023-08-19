import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Movielist from './components/Movielist';
import Filter from './components/Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Robot 2.0',
      description: 'Action, Family',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 6,
      videoLink: 'https://youtu.be/_qOl_7qfPOM?si=_dE9AAPD2EJeOvMm'

    },
    // Add more movies here...
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filterType, filterValue) => {
    let filtered = movies;

    if (filterType === 'title') {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === 'rating') {
      filtered = movies.filter((movie) => movie.rating >= filterValue);
    }

    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    videoLink: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(formData);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
      videoLink: '',
    });
  };

  return (
    <div className="app" style={{textAlign: 'center'}}>
      <h1>My Movie App</h1>
      <Link to = '/'>Home</Link>
      <Outlet />
    
      <Filter handleFilter={handleFilter} />
      <Movielist movies={filteredMovies} />

      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Poster URL:
          <input
            type="text"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <br/>
        <label>
          Trailer-link:
          <input 
          type = 'string'
          name = 'videoLink'
          value = {formData.videoLink}
          onChange={handleInputChange}
          
          />
        </label>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;