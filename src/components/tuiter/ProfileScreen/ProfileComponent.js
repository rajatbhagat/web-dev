import React from 'react';
import './profilescreen.css';
import {Link} from "react-router-dom";

const ProfileComponent = ({profile}) => {
    return(
        <>
            <div className="row mt-2">
                <div className="float-start">
                    <span className="text-white">
                        <i className="fa fa-arrow-left" /> <strong className="mx-2">{profile.firstName} {profile.lastName}</strong>
                    </span>
                </div>
                <div className="mt-1 mx-4">
                    <span className="text-muted">5,196 Tweets</span>
                </div>
                <div className="mt-3">
                    <img src={window.location.origin + profile.bannerPicture}
                         className="wd-profile-background"/>
                </div>
                <div>
                    <img src={window.location.origin + profile.profilePicture}
                         className="wd-round-profile wd-profile-margin"/>
                    <div className="float-end">
                        <Link to="/tuiter/editprofile"><button className="btn btn-light wd-button-rounded text-white bg-black mt-3"
                        >Edit Profile</button></Link>
                    </div>
                </div>
                <div className="mt-3">
                    <span><strong className="text-white wd-profile-name">{profile.firstName} {profile.lastName}</strong></span>
                </div>
                <div className="mt-0 mx-1">
                    <span className="text-muted">@{profile.handle}</span>
                </div>
                <div className="mt-2 mx-1">
                    <span className="text-white">{profile.bio}</span>
                </div>
                <div className="mt-2 mx-1">
                    <span><i className="fa fa-location-arrow" /> {profile.location} </span>
                    <span className="mx-2"><i className="fa fa-calendar" /> Born on {profile.dateOfBirth} </span>
                    <span className="mx-2"><i className="fa fa-briefcase" /> Joined {profile.dateJoined} </span>
                </div>
                <div className="mt-2 mx-1">
                    <span><strong className="text-white">312</strong> <span className="text-muted">Followers </span></span>
                    <span><strong className="text-white">180</strong> <span className="text-muted">Following</span></span>
                </div>

            </div>
        </>
    )
}

export default ProfileComponent;