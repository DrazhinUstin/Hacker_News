import React, { useState } from 'react';
import { formatDate, formatHTML } from '../utils';

const Article = ({ date, title, author, points, comments, text, url }) => {
    const [readMore, setReadMore] = useState(true);
    return (
        <article className='search-result-article'>
            <div className='date'>{formatDate(date)}</div>
            <h4>{title}</h4>
            <p>
                By {author}
                {`${points ? ' | ' + points + ' points' : ''}${
                    comments ? ' | ' + comments + ' comments' : ''
                }`}
            </p>
            {text && !readMore && <p className='text'>{formatHTML(text)}</p>}
            <div className='btn-container'>
                {text && (
                    <button
                        className='text-btn'
                        onClick={() => setReadMore((readMore) => !readMore)}
                    >
                        {readMore ? 'read more' : 'read less'}
                    </button>
                )}
                {url && (
                    <a href={url} target='_blank' rel='noopener noreferrer' className='text-btn'>
                        view article
                    </a>
                )}
            </div>
        </article>
    );
};

export default Article;
