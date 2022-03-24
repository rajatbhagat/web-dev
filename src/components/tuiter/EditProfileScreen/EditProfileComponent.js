import React from 'react';
import {Link} from "react-router-dom";

const EditProfileComponent = ({profile}) => {
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
                    <input className="form-control bg-black text-white" type="text" value={`${profile.firstName} ${profile.lastName} `}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Bio</label>
                </div>
                <div className="mb-2">
                    <textarea className="form-control bg-black text-white" value={profile.bio}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Location</label>
                </div>
                <div className="mb-2">
                    <input className="form-control bg-black text-white" type="text" value={profile.location}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Date of Birth</label>
                </div>
                <div className="mb-2">
                    <input className="form-control bg-black text-white" type="date" value={profile.dateOfBirth}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Website</label>
                </div>
                <div className="mb-2">
                    <input className="form-control bg-black text-white" type="text" value={profile.website}/>
                </div>
            </div>
        </div>
    </>
    );
}

export default EditProfileComponent;