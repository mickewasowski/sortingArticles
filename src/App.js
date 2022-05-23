import React from 'react';
import './App.css';
import 'h8k-components';
import { useEffect, useState } from 'react';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [currentArticles, setCurrentArticles] = useState(null);

    useEffect(() => {
        const sortedByUpvotesDescending = articles.sort(function (a, b) {
            return b.upvotes - a.upvotes
        })

        setCurrentArticles(sortedByUpvotesDescending);
    }, []);

    const handleDateSortDesc = (event) => {
        const sorted = articles.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        })

        setCurrentArticles([...sorted]);
    }

    const handleUpvotesSortDesc = (event) => {
        const sorted = articles.sort(function (a, b) {
            return b.upvotes - a.upvotes
        })

        setCurrentArticles([...sorted]);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={handleUpvotesSortDesc}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={handleDateSortDesc}>Most Recent</button>
            </div>
            <Articles articles={currentArticles} />
        </div>
    );

}

export default App;
