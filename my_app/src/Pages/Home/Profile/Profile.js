import React from "react";
import './Profile.css'
import profilePic from './profile.jpg';
import { useLocation } from "react-router-dom";
const Profile = (props) => {
    return (<div className="container-profile">
        {/* <img src={profilePic} alt="profile-pic" className="profile-pic"/> */}
        
        {
                <div className="info">
                    <h2>{props.name}</h2>
                    <h2>{props.email}</h2>
                    <h2>{props.phoneNumber}</h2>
                </div>       
        }

    </div>)
}
export default Profile