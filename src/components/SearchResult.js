import React from 'react';
import Article from './Article';

const SearchResult = ({ articles }) => {
    return (
        <div className='search-result'>
            {articles.map((article) => {
                const {
                    objectID: id,
                    created_at: date,
                    num_comments: comments,
                    author,
                    points,
                } = article;
                const title = article.title || article.story_title;
                const url = article.url || article.story_url;
                const text = article.story_text || article.comment_text;
                return (
                    <Article key={id} {...{ date, comments, author, points, title, url, text }} />
                );
            })}
        </div>
    );
};

export default SearchResult;
