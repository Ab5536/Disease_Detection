import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';
import Home from "../Home/Home";
import BasicTextFields from "../../Components/textfield";
import SelectSizesExample from "../../Components/SelectExample";
import axios from "axios";
const Signup = () => {
    const residationTypes = ["Home", "Apartment", "Rented"]
    const [tryme, setTryme] = useState(false);
    const navigate = new useNavigate();
    const [formData, setformData] = useState(
        {
            name: "",
            password: "",
            email: "",
            phoneNumber: "",
            cityName: "",
            society: "",
            residationType: "Home",
            gender: ""
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    // const nameChangeHandler=(e)=>{
    //     setName(e.target.value);
    // }
    // const passwordChangeHandler=(e)=>{
    //     setPassword(e.target.value);
    // }
    const signUp = async () => {
        try {
            const result = await axios.post('http://localhost:5000/api/signup', formData)
            console.log(result)
            if (result.status === 200) {
                navigate('/')
            }
            else{
                alert("Signup Failed")
            }
        } catch (error) {
            console.log(error)
            alert("Error Occured")
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        signUp();
        // if(formData.email && formData.cityName && formData.gender && formData.gender!="Gender" && formData.residationType && formData.name && formData.password)
        //  {
        //     navigate("/home",{state:{name:formData.name,email:formData.email,cityName:formData.cityName,residationType:formData.residationType,society:formData.society,phoneNumber:formData.phoneNumber}})
        //  }
        //  else
        //  {
        //      alert("Kindly fill all the details");
        //      return;
        //  }
    }
    return (

        <div className="container">
            <div className="nameofApp">
                <h1 id="top-item-1">Authenticator</h1>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <h2 className="top-items">Sign Up</h2>
                <input className="border-edit" placeHolder="Enter Email" onChange={handleChange} value={formData.email} name="email" type="email" />
                <input className="border-edit" placeHolder="Enter Name" onChange={handleChange} value={formData.name} name="name" type="text" />
                <input className="border-edit" placeHolder="Enter Phone Number" onChange={handleChange} value={formData.phoneNumber} name="phoneNumber" type="text" />
                <input className="border-edit" placeHolder="Enter Password" onChange={handleChange} value={formData.password} name="password" type="password" />
                <input className="border-edit" placeHolder="Enter City Name" onChange={handleChange} value={formData.cityName} name="cityName" type="text" />
                <input className="border-edit" placeHolder="Enter Society" onChange={handleChange} value={formData.society} name="society" type="text" />
                <select className="border-edit" onChange={handleChange} value={formData.residationType} name="residationType">
                    {residationTypes.map((type) => (
                        <option value={type}>{type}</option>)
                    )
                    }
                </select>
                <select className="border-edit" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button className="button" type="submit">Submit</button>
            </form>
            {/* <button onClick={()=>{
            setTryme(!tryme);
           }}>Toggle</button>
            {tryme? <h2>{formData.email}</h2>:<h1>Hello</h1>} */}
        </div>)
}
export default Signup