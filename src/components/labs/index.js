import React from 'react';
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/ToDoList";
import ReduxExamples from "./redux-examples";



const Index = () => {
    return (
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter Home
            </Link> |
            <Link to="/tuiter/explore">
                Tuiter Explore
            </Link>
            <ReduxExamples/>
            <TodoList />
            <ConditionalOutput/>
            <Styles/>
            <Classes />
        </>

);
}

export default Index;