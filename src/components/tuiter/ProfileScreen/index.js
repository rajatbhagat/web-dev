import React from 'react';
import './profilescreen.css';
import {Link} from "react-router-dom";

const ProfileScreen = () => {

    return(
        <>
            <div className="row mt-2">
                <div className="float-start">
                    <span className="text-white">
                        <i className="fa fa-arrow-left" /> <strong className="mx-2">Rajat Bhagat</strong>
                    </span>
                </div>
                <div className="mt-1 mx-4">
                    <span className="text-muted">5,196 Tweets</span>
                </div>
                <div className="mt-3">
                    <img src={window.location.origin + "/tuiter/images/profile_background.jpeg"}
                         className="wd-profile-background"/>
                </div>
                <div>
                    <img src={window.location.origin + "/tuiter/images/profilePicture.png"}
                         className="wd-round-profile wd-profile-margin"/>
                    <div className="float-end">
                        <Link to="/tuiter/editprofile"><button className="btn btn-light wd-button-rounded text-white bg-black mt-3"
                        >Edit Profile</button></Link>
                    </div>
                </div>
                <div className="mt-3">
                    <span><strong className="text-white wd-profile-name">Rajat Bhagat</strong></span>
                </div>
                <div className="mt-0 mx-1">
                    <span className="text-muted">@rajatbhagat</span>
                </div>
                <div className="mt-2 mx-1">
                    <span className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
                <div className="mt-2 mx-1">
                    <span><i className="fa fa-location-arrow" /> Boston, MA </span>
                    <span className="mx-2"><i className="fa fa-calendar" /> Born on 11th February, 1996 </span>
                    <span className="mx-2"><i className="fa fa-briefcase" /> Joined September 2021 </span>
                </div>
                <div className="mt-2 mx-1">
                    <span><strong className="text-white">312</strong> <span className="text-muted">Followers </span></span>
                    <span><strong className="text-white">180</strong> <span className="text-muted">Following</span></span>
                </div>

            </div>
        </>
    )
}

export default ProfileScreen;