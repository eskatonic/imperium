import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ContentContainer from './ContentContainer';
import Content from './Content';
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

            <div className="Main-searchbar">
                <Searchbar searchString={searchString}
                            handleClick={handleClick}
                            handleChange={handleChange}
                            setSearcString={setSearchString}/>
            </div>

            <div className="Main">
            <iframe title= "map" src="https://travellermap.com/go/spin/1910?style=print">
</iframe>

            </div>
            <Content />
        </div>
    );
}

export default Main;