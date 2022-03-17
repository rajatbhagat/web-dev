import React from 'react';
import {Link} from 'react-router-dom';

const HelloWord = () => {
    return (
        <>
            <h1>Hello World</h1>
            <Link to="/">
                Labs
            </Link> |
            <Link to="/tuiter/home">
                Tuiter Home
            </Link>
            <Link to="/tuiter/explore">
                Tuiter Explore
            </Link>
        </>
);
}

export default HelloWord;