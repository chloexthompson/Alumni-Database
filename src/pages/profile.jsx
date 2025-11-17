// 

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header-icon.jsx";

export default function Profile() {
    const location = useLocation();
    
    // Get data from navigation state, with fallback defaults
    const { 
        firstName = 'First Name', 
        lastName = 'Last Name', 
        major = 'Major', 
        gradYear = 'Graduation Year', 
        referralStatus = 'Referral Status', 
        description = 'Description', 
        skills = ['Python', 'Power BI', 'Tableau', 'Analytics']
    } = location.state || {};

    const [connected, setConnected] = useState(false);
    const [connectionCount, setConnectionCount] = useState(0);
    
    const handleConnectClick = () => {
        setConnected(!connected);
        setConnectionCount(connected ? connectionCount - 1 : connectionCount + 1);
    };

    return(
        <div className="profile-page">
            <div className="header-icons">
                <div>
                    <Header></Header>
                </div>
            </div>

            <div className="profile-container">
                <div className="profile-left">
                    <div className="profile-image-circle">
                        <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="profile icon" />
                    </div>
                    <button 
                        className="connect-btn"
                        onClick={handleConnectClick}
                    >
                        {connected ? "Connected" : "+ Connect"}
                    </button>
                </div>

                <div className="profile-right">
                    <div className="profile-top-row">
                        <div className="profile-info">
                            <h2 className="profile-name">{firstName} {lastName}</h2>
                            <p className="major">{major}</p>
                            <p className="grad-year">{gradYear}</p>
                            <p className="referral">{referralStatus ? `Referral Status: ${referralStatus}` : 'Referral Status'}</p>
                        </div>

                        <div className="connections-box">
                            <p className="connections-title">Connections</p>
                            <p className="connections-number">{connectionCount}</p>
                        </div>
                    </div>

                    <div className="profile-description">
                        {description}
                    </div>

                    <div className="skills-section">
                        <div className="skills-title">Skills/Interests</div>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}