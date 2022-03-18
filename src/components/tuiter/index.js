import React from 'react';
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return (
        <Routes>
            <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
            <Route path="/tuiter/home" element={<HomeScreen/>}/>
        </Routes>



    );
}

export default Tuiter;