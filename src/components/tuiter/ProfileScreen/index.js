import React from 'react';
import './profilescreen.css';

const ProfileScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="float-start">
                    <span className="text-white">
                        <i className="fa fa-window-close" /> <strong className="mx-3">Edit Profile</strong>
                    </span>
                    <div className="float-end">
                        <button className="btn bg-white text-black  wd-button-rounded"><strong>Save</strong></button>
                    </div>
                </div>
                <div className="mt-3">
                    <img src={window.location.origin + "/tuiter/images/profile_background.jpeg"}
                         className="wd-profile-background"/>
                </div>
                <div>
                    <img src={window.location.origin + "/tuiter/images/profilePicture.png"}
                         className="wd-round-profile wd-profile-margin"/>
                    <div className="float-end">
                        <button className="btn btn-light wd-button-rounded text-white bg-black mt-3">Edit Profile</button>
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