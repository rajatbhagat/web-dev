import React from "react";
import {createStore} from "redux";
import hello from './reducers/hello'
import HelloReduxExample from "./hello-redux-example";
import {Provider} from "react-redux";
const helloStore = createStore(hello);


const ReduxExamples = () => {
    return(
        <Provider store={helloStore}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExample/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;

