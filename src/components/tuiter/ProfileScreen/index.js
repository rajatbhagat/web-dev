import React from 'react';
import './profilescreen.css';
import {useSelector, useDispatch} from "react-redux";
import ProfileComponent from "./ProfileComponent";

const ProfileScreen = () => {
    const profileData = useSelector(state => state.profile);
    return (
        <>
            {
                profileData.map( data =>
                    <ProfileComponent profile={data}/>
                )
            }
        </>
    )
}

export default ProfileScreen;