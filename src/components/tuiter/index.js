import React from 'react';
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return (

            <BrowserRouter>
                <Routes>
                    <Route path="/tuiter/explore" element={<ExploreScreen active={'explore'}/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen active={'home'}/>}/>
                </Routes>
            </BrowserRouter>


    );
}

export default Tuiter;