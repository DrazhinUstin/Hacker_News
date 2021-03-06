import React from 'react';
import { FaSearch, FaCog } from 'react-icons/fa';

const SearchForm = ({ isSettingsOpen, setIsSettingsOpen, params, setParams }) => {
    const handleChange = (e) => {
        setParams((params) => {
            return { ...params, page: 0, [e.target.id]: e.target.value };
        });
    };
    return (
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
            <button
                type='button'
                className='btn'
                onClick={() => setIsSettingsOpen((isSettingsOpen) => !isSettingsOpen)}
            >
                <FaCog /> settings
            </button>
            <div className={`search-form-settings ${isSettingsOpen && 'active'}`}>
                <div>
                    <label htmlFor='tags'>search</label>
                    <select id='tags' value={params.tags} onChange={handleChange}>
                        <option value=''>all</option>
                        <option value='story'>story</option>
                        <option value='comment'>comment</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='search'>sort by</label>
                    <select id='search' value={params.search} onChange={handleChange}>
                        <option value='search'>popularity</option>
                        <option value='search_by_date'>date</option>
                    </select>
                </div>
            </div>
            <div className='search-form-input'>
                <input
                    id='query'
                    type='text'
                    placeholder='Search news'
                    autoComplete='off'
                    value={params.query}
                    onChange={handleChange}
                />
                <FaSearch />
            </div>
        </form>
    );
};

export default SearchForm;
