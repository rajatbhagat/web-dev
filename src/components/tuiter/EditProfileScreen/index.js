import React from 'react';
import './editprofile.css';
import {useSelector} from "react-redux";
import EditProfileComponent from "../EditProfileScreen/EditProfileComponent";

const EditProfileScreen = () => {

    const profileData = useSelector(state => state.profile);
    return (
        <>
            {
                profileData.map( data =>
                                     <EditProfileComponent profile={data}/>
                )
            }
        </>
    );
}

export default EditProfileScreen;