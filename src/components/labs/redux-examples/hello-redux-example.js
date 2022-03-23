import React from 'react';
import {useSelector} from "react-redux";

const HelloReduxExample = () => {
    const message = useSelector((hello) =>  hello.message);
    return(<h1>{message}</h1>);
};

export default HelloReduxExample;