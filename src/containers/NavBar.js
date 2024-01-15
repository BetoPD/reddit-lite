import React from 'react';
import { FaReddit, FaSearch, FaServer } from 'react-icons/fa';

export default function NavBar() {
  return (
    <header>
      <div className="logo">
        <FaReddit color="red" />
      </div>
      <form>
        <input />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
