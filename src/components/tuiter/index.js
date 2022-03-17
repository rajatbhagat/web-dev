import React from 'react';
import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whoToFollow/WhoToFollowList";

const Index = () => {
    return (
        <>
            <NavigationSidebar active={'home'}/>
            <WhoToFollowList />
        </>

);
}

export default Index;