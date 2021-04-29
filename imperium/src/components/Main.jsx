import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Searchbar from './Searchbar';

function Main(props) {

    const [searchString, setSearchString] = useState({})

    const handleClick = (e) => {
        e.preventDefault();
        setSearchString(searchString);
    }
    
    const handleChange = (ev) => {
        setSearchString(ev.target.value);
    }

    return (
        <div className="Main-container">

            <p>Welcome to the Third Imperium!  Please select a Sector for more information.</p>
            <p>If you know the name of the star system you'd like to explore, please enter it below.</p>
            <div className="Main-searchbar">
                <Searchbar searchString={searchString}
                            handleClick={handleClick}
                            handleChange={handleChange}
                            setSearcString={setSearchString}/>
            </div>

            <div className="Main">


            </div>
        </div>
    );
}

export default Main;