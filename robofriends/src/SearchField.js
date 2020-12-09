import React from 'react';

const SearchField = ({ onSearchChange }) => {
    return (
        <input onChange={ onSearchChange } type='search' placeholder='Search' className='ba b--green br3 bg-lightest-blue pa2 ma2'/>
    );
}

export default SearchField;