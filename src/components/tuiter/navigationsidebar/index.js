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
                <Link className={`list-group-item list-group-item-action ${active === 'home' ? 'active': ''} `}
                   to="/tuiter/home">
                    <i className="fa fa-home float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Home</span></Link>
                <Link className={`list-group-item list-group-item-action ${active === 'explore' ? 'active': ''} `}
                   to="/tuiter/explore">
                    <i className="fa fa-hashtag float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Explore</span></Link>
                <Link className="list-group-item list-group-item-action " to="">
                    <i className="fa fa-bell float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Notifications</span></Link>
                <Link className="list-group-item list-group-item-action " to="">
                    <i className="fa fa-envelope float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Messages</span></Link>
                <Link className="list-group-item list-group-item-action " to="">
                    <i className="fa fa-bookmark float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Bookmarks</span></Link>
                <Link className="list-group-item list-group-item-action " to="">
                    <i className="fa fa-list float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">List</span></Link>
                <Link className={`list-group-item list-group-item-action ${active === 'profile' ? 'active': ''} `} to="/tuiter/profile">
                    <i className="fa fa-user float-start wd-padding-top wd-right-padding text-white"/>
                    <span className="d-none d-lg-block text-white">Profile</span></Link>
                <Link className="list-group-item list-group-item-action " to="">
                    <span className="fa-stack fa-1x float-start wd-negative-margin-more-icon">
                        <i className="fas fa-circle fa-stack-1x float-start wd-more-icon-size text-white"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"/>
                    </span> <span className="d-none d-lg-block text-white">More</span></Link>
            </div>
            <div className="d-grid mt-2">
                <a href="#"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>

    );
}

export default NavigationSidebar;