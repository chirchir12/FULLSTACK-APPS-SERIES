import React, { useState } from 'react';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { Searchjobs, setSearchjobs } = props;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    let list = Searchjobs.filter((item) => {
      let title = item.title.toLowerCase();
      let filtered = searchTerm.toLowerCase();
      return title.includes(filtered);
    });
    setSearchjobs(list);
  };

  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control w-50 mr-sm-2"
          type="search"
          name="search"
          value={searchTerm}
          placeholder="Search"
          onChange={handleChange}
          aria-label="Search"
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
