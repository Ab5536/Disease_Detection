import React from "react";
import ColorSchemesExample from "./Header/navbarhead";
import './Mainpage.css'
import Consultation from "./Components/Consultation/Consultation";
import Chatbot from "./Components/ChatbotAI/ChatbotAI";
import Home from "./Components/Home/Home";
import { Navigate, useNavigate } from "react-router-dom";
const Mainpage = () => {
    const route = useNavigate();

    return (

        <div className="mainpage">
            <header className="header-mainpage">
                <h1>Health Detection System</h1>
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
