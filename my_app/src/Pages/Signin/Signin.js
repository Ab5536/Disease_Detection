import React, { useState } from "react";
import './Signin.css';
import InputField from "./Inputfield/InputField";

const Signin = () => {
    const [formData, setFormData] = useState({
        cityName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.cityName && formData.email && formData.password) {
            setError("");
            console.log("Sign-in successful!", formData);
        } else {
            setError("Please fill in all fields.");
        }
    };

    return (
        <div className="signin-container">
            <h1 className="signin-title">Sign In</h1>
            <h2 className="app-subtitle">Authenticator</h2>
            <form className="signin-form" onSubmit={submitHandler}>
                <InputField
                    name="cityName"
                    placeholder="City Name"
                    value={formData.cityName}
                    onChange={handleChange}
                />
                <InputField
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Signin;
