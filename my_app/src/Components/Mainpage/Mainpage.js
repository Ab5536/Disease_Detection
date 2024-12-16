import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './Mainpage.css'
import ModelML from "./Components/ModelML/ModelML";
import Consultation from "./Components/Consultation/Consultation";
import Chatbot from "./Components/ChatbotAI/ChatbotAI";
import Home from "./Components/Home/Home";
import { Navigate, useNavigate } from "react-router-dom";
import logo from './images/logo.png';

const Mainpage = () => {
const route = useNavigate();

    return (

        <div className="mainpage">
            <header className="header-mainpage">
                <div className="logo-container"> 
                <img src={logo} alt="Disease Detection System Logo" className="logo" /> 
                </div>
                <h1>Disease Detection </h1>
                <nav>
                    <ul className="header-items-mainpage">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#upload">Upload</a></li>
                        <li><a href="#consultation">Consultation</a></li>
                        <li 
                            onClick={()=>
                                {
                                route('/signin')
                                }
                            }
                        >
                            Signin
                        </li>
                        <li onClick={() => {
                            route('/signup')
                        }
                        }>Signup</li>
                    </ul>
                </nav>
            </header>

            <main>

            <section className="first-section">
                <div className="first-text">
                    <span className="subheading">Best Treatment in Town</span>
                    <h1>Your Health, Our Priority</h1>
                    <p>Benefit from expert medical guidance and innovative treatment approaches</p>
                    <button 
                        className="btn-consult-us" 
                        onClick={() =>{}}
                    >
                        Consult Us 
                    </button>
                </div>
            </section>
            <Home />
            <ModelML/>
            {/* <Consultation/> */}
            {/* <Chatbot /> */}
            </main>
            <footer>
                <p> 2024 Health Detection System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Mainpage;
