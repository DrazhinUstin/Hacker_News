import React from 'react';

const Pagination = ({ isLoading, params, setParams, nbPages }) => {
    if (!nbPages) return null;

    const switchPage = (direction) => {
        setParams((params) => {
            let page;
            if (direction === 'prev') {
                page = params.page - 1;
                if (page < 0) page = nbPages - 1;
            } else if (direction === 'next') {
                page = params.page + 1;
                if (page > nbPages - 1) page = 0;
            }
            return page === undefined ? params : { ...params, page };
        });
    };

    return (
        <div className={`pagination ${isLoading ? 'disabled' : ''}`}>
            {nbPages > 1 && (
                <button className='btn' onClick={() => switchPage('prev')}>
                    prev
                </button>
            )}
            <span>
                page {params.page + 1} of {nbPages}
            </span>
            {nbPages > 1 && (
                <button className='btn' onClick={() => switchPage('next')}>
                    next
                </button>
            )}
        </div>
    );
};

export default Pagination;
