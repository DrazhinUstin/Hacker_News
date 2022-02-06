import React from 'react';

const SearchResult = ({ articles }) => {
    return (
        <div className='search-result'>
            {articles.map((article) => {
                return <article className='search-result-article'>article</article>;
            })}
        </div>
    );
};

export default SearchResult;
