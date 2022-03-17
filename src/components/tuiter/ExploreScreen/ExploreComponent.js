import PostSummaryList from "../PostSummaryList/index.js";
import React from 'react';
import './explorescreen.css';

const ExploreComponent = () => {
    return(
        <>
        <div className="d-inline-flex wd-occupy-all-width">
            <div className="wd-group-input-icon wd-left-margin">
                <i className="fa fa-search wd-icon-inside wd-search-bar-icon-color"/>
                <input className="form-control wd-rounded-corners-search wd-fill-width-search-bar wd-center-section-border"
                       placeholder="Search Tuiter" type="search"/>
            </div>
            <div>
                <i className="fa fa-cog float-end wd-icon-size text-white wd-left-margin"/>
            </div>
        </div>
        <div>
            <ul className="nav nav-tabs wd-padding-top">
                <li className="nav-item">
                    <a className="nav-link active text-white" href="#">For You</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link " href="#">Trending</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link " href="#">News</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link " href="#">Sports</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link "
                       href="#">Entertainment</a>
                </li>
            </ul>
        </div>
        <div className="wd-center-post-section mt-2">
            <div className="wd-center-img-container">
                <img className="wd-occupy-all-width" src={window.location.origin + '/tuiter/images/spacexpic.jpeg'}/>
                <strong><p className="wd-txt-over-img">
                    SpaceX's Starship
                </p></strong>
            </div>
            <PostSummaryList/>
        </div>
        </>
    )
}

export default ExploreComponent;