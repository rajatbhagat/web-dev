import React from 'react';
import '../../../vendors/fontawesome/css/all.min.css';
import './navigationsidebar.css';
import {Link} from "react-router-dom";

const NavigationSidebar = ({active}) => {
    return (
        <div className="row mt-2">
            <div className="list-group">
                <Link className="list-group-item" to="/">
                    <i className="fab fa-twitter" /></Link>
                <Link className={`list-group-item list-group-item-action ${active === 'home' ? 'active': ''} "`}
                   to="/tuiter/home">
                    <i className="fa fa-home float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Home</span></Link>
                <Link className={`list-group-item list-group-item-action ${active === 'explore' ? 'active': ''} "`}
                   to="/tuiter/explore">
                    <i className="fa fa-hashtag float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Explore</span></Link>
                <a className="list-group-item list-group-item-action ">
                    <i className="fa fa-bell float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Notifications</span></a>
                <a className="list-group-item list-group-item-action ">
                    <i className="fa fa-envelope float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Messages</span></a>
                <a className="list-group-item list-group-item-action ">
                    <i className="fa fa-bookmark float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Bookmarks</span></a>
                <a className="list-group-item list-group-item-action ">
                    <i className="fa fa-list float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">List</span></a>
                <a className="list-group-item list-group-item-action ">
                    <i className="fa fa-user float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Profile</span></a>
                <a className="list-group-item list-group-item-action ">
                    <span className="fa-stack fa-1x float-start wd-negative-margin-more-icon">
                        <i className="fas fa-circle fa-stack-1x float-start wd-more-icon-size text-white"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"/>
                    </span> <span className="d-none d-lg-block text-white">More</span></a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>

    );
}

export default NavigationSidebar;