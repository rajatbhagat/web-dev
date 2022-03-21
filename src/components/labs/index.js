import React from 'react';
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/ToDoList";
// import ReduxExamples from "./redux-examples";
// import HelloReduxExample from "./redux-examples/hello-redux-example";


const Index = () => {
    return (
        <>
            <h1>Labs</h1>
            <TodoList />
            <ConditionalOutput/>
            <Styles/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <Classes />
            {/*<ReduxExamples/>*/}
        </>

);
}

export default Index;