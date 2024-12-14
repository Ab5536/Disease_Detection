import React from "react";
import ColorSchemesExample from "./Header/navbarhead";
import './Mainpage.css'
import Consultation from "./Components/Consultation/Consultation";
import Chatbot from "./Components/ChatbotAI/ChatbotAI";
import Home from "./Components/Home/Home";
import { Navigate, useNavigate } from "react-router-dom";
import logo from './logo.png';
const Mainpage = () => {
    const route = useNavigate();

    return (

        <div className="mainpage">
            <header className="header-mainpage">
                <div className="logo-container"> {/* Wrap logo in a container */}
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
                        onClick={() =>{
                            route('/consultation')
                        }
                    }
                    >
                        Consult Us 
                    </button>
                </div>

            </section>
                <Home />
                <Consultation />
                <Chatbot />
                <section id="upload">
                    <h2>Upload X-ray Images</h2>
                    <form id="uploadForm">
                        <label for="fileInput">Choose an X-ray image:</label>
                        <input type="file" id="fileInput" accept="image/*" required />
                        <button type="submit">Upload</button>
                    </form>
                    <div id="report"></div>
                </section>
            </main>
            <footer>
                <p> 2024 Health Detection System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Mainpage;
