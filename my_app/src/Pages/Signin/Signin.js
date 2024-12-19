import React, { useState } from "react";
import "./Signin.css";
import InputField from "./Inputfield/InputField";

const Signin = () => {
    const [formData, setFormData] = useState({
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
        if (formData.email && formData.password) {
            setError("");
            console.log("Sign-in successful!", formData);
        } else {
            setError("Please fill in all fields.");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <h1 className="signin-title">Virtual Disease Detection</h1>
                <h2 className="signin-subtitle"></h2>
                <form className="signin-form" onSubmit={submitHandler}>
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputField
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-button">
                        Sign In
                    </button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Signin;
