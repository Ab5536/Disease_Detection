import React, { useEffect } from "react";
import { useState } from "react";
import Address from "./address";
import './Home.css'
import { useLocation } from "react-router-dom";
import Profile from "./Profile/Profile";
const Home = (props) => {
    const location = useLocation();
    const { name,email, cityName, residationType, society,phoneNumber } = location.state || {};
    const [addresses,setAdresses]=useState([])
    const [formData, setformData] = useState({
        cityName:cityName,
        society:residationType,
        residationType:society
    });
    const addAddress=()=>{
        setAdresses([...addresses,formData])
    }
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }

    return (<div>
        <div className="container-home">
            <header className="header-home">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </nav>
            </header>
            <div className="profile-home">
                <Profile name={name} email={email} phoneNumber={phoneNumber}/>
                <div className="info-home">
                    <input onChange={changeHandler} className="address-home" value={formData.cityName} name="cityName" />
                    <input onChange={changeHandler} className="address-home" value={formData.society} name="society" />
                    <input onChange={changeHandler} className="address-home" value={formData.residationType} name="residationType" />
                    <button className="btn-home" onClick={addAddress} >+</button> 
                </div>
                <Address cityName={formData.cityName} society={formData.society} residationType={formData.residationType} >Hello</Address>
                {addresses.map((address)=>{return  <Address cityName={address.cityName} society={address.society} residationType={address.residationType} >Hello</Address>})}
            </div>

           


        </div>
    </div>)
}

export default Home;