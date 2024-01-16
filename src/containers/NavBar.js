import React, { useState } from 'react';
import { FaReddit, FaSearch } from 'react-icons/fa';
import { createSearchParams, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localSearchTerm.length === 0) {
      navigate('/');
      return;
    }

    setLocalSearchTerm('');

    const searchQuery = { searching: localSearchTerm };
    const query = createSearchParams(searchQuery);
    navigate({
      pathname: '/',
      search: `?${query}`,
    });
  };

  return (
    <header>
      <div className="logo" onClick={() => navigate('/')}>
        <FaReddit color="red" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={localSearchTerm}
          placeholder="search for post"
          onChange={(e) => setLocalSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
