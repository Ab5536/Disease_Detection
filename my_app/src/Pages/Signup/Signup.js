import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css';

const Signup = () => {
    const residationTypes = ["Home", "Apartment", "Rented"];
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        phoneNumber: "",
        cityName: "",
        society: "",
        residationType: "Home",
        gender: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const signUp = async () => {
        try {
            const result = await axios.post("http://localhost:5000/api/signup", formData);
            if (result.status === 200) {
                navigate("/");
            } else {
                setError("Signup Failed");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred. Please try again later.");
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            signUp();
        } else {
            setError("Please fill in all the fields correctly.");
        }
    };

    const validateForm = () => {
        const { email, name, phoneNumber, password, cityName, society, gender } = formData;
        return email && name && phoneNumber && password && cityName && society && gender && gender !== "Gender";
    };

    return (
        <div className="signup-container">
            
            <h1 className="app-title">Authenticator</h1>

            <form className="signup-form" onSubmit={submitHandler}>
                
                <h2 className="form-title">Sign Up</h2>
                
                <input
                    className="form-input"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    type="email"
                    required
                />
                
                <input
                    className="form-input"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    type="text"
                    required
                />
                
                <input
                    className="form-input"
                    placeholder="Enter Phone Number"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    type="tel"
                    required
                />
                
                <input
                    className="form-input"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    type="password"
                    required
                />
                
                <input
                    className="form-input"
                    placeholder="Enter City Name"
                    onChange={handleChange}
                    value={formData.cityName}
                    name="cityName"
                    type="text"
                    required
                />
                
                <input
                    className="form-input"
                    placeholder="Enter Society"
                    onChange={handleChange}
                    value={formData.society}
                    name="society"
                    type="text"
                    required
                />
                
                <select
                    className="form-select"
                    onChange={handleChange}
                    value={formData.residationType}
                    name="residationType"
                    required
                >

                    {residationTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}

                </select>
                
                <select
                    className="form-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >

                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select>
                
                {error && <p className="error-message">{error}</p>}
                
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
