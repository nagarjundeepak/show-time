import React, {useState} from 'react';

function SearchBar (props) {
  const [searchTerm, setSearchTerm] = useState (null);
  const handleChange = e => {
    setSearchTerm (e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault ();
    props.onHandleSubmit (searchTerm);
  };
  return (
    <div className="container mt-3">
      <form className="row" onSubmit={onFormSubmit}>
        <div className="col">
          <input
            required
            type="search"
            placeholder="search here"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="col-3" style={{maxWidth: '30%'}}>
          <button className="form-control btn btn-warning">
            <b>Search</b>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
