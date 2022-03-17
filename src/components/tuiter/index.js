import React from 'react';
import NavigationSidebar from "./navigationsidebar";
import WhoToFollowList from "./whoToFollow/WhoToFollowList";
import PostSummaryList from "./PostSummaryList";

const Tuiter = () => {
    return (
        <>
            <NavigationSidebar active={'home'}/>
            <PostSummaryList />
            <WhoToFollowList />
        </>

    );
}

export default Tuiter;