import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const EditProfileComponent = ({profile}) => {

    let updatedProfile = profile;

    const dispatch = useDispatch();

    const saveChanges = () => {
        dispatch({
            type: 'UPDATE_PROFILE',
            profile: updatedProfile
        })
    }

    const nameFieldChange = (val) => {
        if (val === profile.firstName + " " + profile.lastName) {
            updatedProfile.firstName = profile.firstName;
            updatedProfile.lastName = profile.lastName;
            return;
        }
        let names = val.split(' ');
        if (names.length > 1) {
            updatedProfile.firstName = names[0];
            updatedProfile.lastName = names[1];
        } else {
            updatedProfile.firstName = names[0];
        }
    }

    const bioChange = (val) => {

        if (val === profile.bio) {
            updatedProfile.bio = profile.bio;
            return;
        }
        updatedProfile.bio = val;
    }

    const locationChange = (val) => {
        if (val === profile.location) {
            updatedProfile.location = profile.location;
            return;
        }
        updatedProfile.location = val;
    }

    const dateOfBirthChange = (val) => {
        if (val === profile.dateOfBirth) {
            updatedProfile.dateOfBirth = profile.dateOfBirth;
            return;
        }
        updatedProfile.dateOfBirth = val;
    }

    const websiteChange = (val) => {
        if (val === profile.website) {
            updatedProfile.website = profile.website;
            return;
        }
        updatedProfile.website = val;
    }

    return (
    <>
        <div className="row mt-2">
            <div className="float-start text-white">
                <Link to="/tuiter/profile"><i className="fa fa-window-close text-white"/></Link>
                <span className="mx-2"><strong>Edit Profile</strong></span>
                <div className="float-end">
                    <Link to="/tuiter/profile"><button onClick={saveChanges} className="btn bg-white text-black  wd-button-rounded">
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
                    <input className="form-control bg-black text-white" type="text" defaultValue={`${profile.firstName} ${profile.lastName} `} onChange={(event) => {
                        nameFieldChange(event.target.value);
                    }}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Bio</label>
                </div>
                <div className="mb-2">
                    <textarea className="form-control bg-black text-white" defaultValue={profile.bio} onChange={(event) => {bioChange(event.target.value)}}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Location</label>
                </div>
                <div className="mb-2">
                    <input className="form-control bg-black text-white" type="text" defaultValue={profile.location} onChange={(event) => {locationChange(event.target.value)}}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Date of Birth</label>
                </div>
                <div className="mb-2">
                    <input className="form-control bg-black text-white" type="date" defaultValue={profile.dateOfBirth} onChange={(event) => {dateOfBirthChange(event.target.value)}}/>
                </div>
            </div>
            <div className="wd-input-field-border mx-3 mt-2">
                <div className="mt-1" >
                    <label className="text-muted">Website</label>
                </div>
                <div className="mb-2">
                    <input className="form-control bg-black text-white" type="text" defaultValue={profile.website} onChange={(event) => {websiteChange(event.target.value)}}/>
                </div>
            </div>
        </div>
    </>
    );
}

export default EditProfileComponent;