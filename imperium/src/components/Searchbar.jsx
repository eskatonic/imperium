import React, { useState } from 'react';

// Or you can put these in App.js

// const handleClick = () => {

// }

// const handleChange = () => {

// }



function Searchbar(handleChange, handleClick, searchString) {
const {searchInput, setSearchInput} = useState({});



    return (
        <div className="searchbar">
            <form onSubmit={handleClick}>
                <input type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchString}>
                
                
                </input>

                <button type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default Searchbar;