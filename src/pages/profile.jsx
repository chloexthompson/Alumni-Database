import { useState } from "react";
import Header from  "../components/header-icon.jsx";
//import { useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
//import { db } from "../firebase";
//import { doc, getDoc } from "firebase/firestore";

export default function Profile({ firstName, lastName, major, gradYear, referralStatus, description, skills }){
    const [connected, setConnected] = useState(false);
    const [connectionCount, setConnectionCount] = useState(0);
    const handleConnectClick = () => {
        setConnected(!connected);
        setConnectionCount(connected ? connectionCount - 1 : connectionCount + 1);
    };
export default function Profile(){
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
                            <h2 className="profile-name">{firstName || 'First Name'} {lastName || 'Last Name'}</h2>
                            <p className="major">{major || 'Major'}</p>
                            <p className="grad-year">{gradYear || 'Graduation Year'}</p>
                            <p className="referral">{referralStatus ? `Referral Status: ${referralStatus}` : 'Referral Status'}</p>
                        </div>

                        <div className="connections-box">
                            <p className="connections-title">Connections</p>
                            <p className="connections-number">{connectionCount}</p>
                        </div>
                    </div>

                    <div className="profile-description">
                        {description || 'Description'}
                    </div>

                    <div className="skills-section">
                        <div className="skills-title">Skills/Interests</div>
                        <div className="skills-list">
                            {(skills && skills.length > 0 ? skills : ['Python', 'Power BI', 'Tableau', 'Analytics']).map((skill, index) => (
                                <span key={index} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}