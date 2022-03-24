import React from 'react';
import {Link} from "react-router-dom";
import './editprofile.css';

const EditProfileScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="float-start text-white">
                    <Link to="/tuiter/profile"><i className="fa fa-window-close text-white"/></Link>
                    <span className="mx-2"><strong>Edit Profile</strong></span>
                    <div className="float-end">
                        <Link to="/tuiter/profile"><button className="btn bg-white text-black  wd-button-rounded">
                            <strong>Save</strong></button></Link>
                    </div>
                </div>
                <div className="mt-3">
                    <img src={window.location.origin + "/tuiter/images/profile_background.jpeg"}
                         className="wd-profile-background"/>
                </div>
                <div>
                    <img src={window.location.origin + "/tuiter/images/profilePicture.png"}
                         className="wd-round-profile wd-profile-margin"/>
                </div>
                <div className="wd-input-field-border mx-3">
                    <div className="mt-1" >
                        <label className="text-muted">Name</label>
                    </div>
                    <div className="mb-2">
                        <input className="form-control bg-black text-white" type="text" value="Rajat Bhagat"/>
                    </div>
                </div>
                <div className="wd-input-field-border mx-3 mt-2">
                    <div className="mt-1" >
                        <label className="text-muted">Bio</label>
                    </div>
                    <div className="mb-2">
                        <textarea className="form-control bg-black text-white" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    </div>
                </div>
                <div className="wd-input-field-border mx-3 mt-2">
                    <div className="mt-1" >
                        <label className="text-muted">Location</label>
                    </div>
                    <div className="mb-2">
                        <input className="form-control bg-black text-white" type="text" value="Boston, MA"/>
                    </div>
                </div>
                <div className="wd-input-field-border mx-3 mt-2">
                    <div className="mt-1" >
                        <label className="text-muted">Date of Birth</label>
                    </div>
                    <div className="mb-2">
                        <input className="form-control bg-black text-white" type="date" value="1996/02/11"/>
                    </div>
                </div>
                <div className="wd-input-field-border mx-3 mt-2">
                    <div className="mt-1" >
                        <label className="text-muted">Website</label>
                    </div>
                    <div className="mb-2">
                        <input className="form-control bg-black text-white" type="text"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfileScreen;