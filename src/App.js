import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Pagination from './components/Pagination';
import SearchResult from './components/SearchResult';

const API_START_POINT = 'http://hn.algolia.com/api/v1/';
const initParams = {
    search: 'search_by_date',
    query: 'react',
    tags: '',
    page: 0,
};

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [params, setParams] = useState(initParams);
    const [nbPages, setNbPages] = useState(0);
    const [articles, setArticles] = useState([]);

    const getArticles = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.hits) {
                setArticles(data.hits);
                setNbPages(data.nbPages);
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const { search, query, tags, page } = params;
        getArticles(`${API_START_POINT}${search}?query=${query}&tags=${tags}&page=${page}`);
    }, [params]);

    return (
        <>
            <Navbar />
            <section className='section section-center'>
                <SearchForm {...{ isSettingsOpen, setIsSettingsOpen, params, setParams }} />
                {isLoading ? (
                    <div className='loading'></div>
                ) : (
                    <>
                        <Pagination />
                        <SearchResult articles={articles} />
                    </>
                )}
            </section>
        </>
    );
};

export default App;
