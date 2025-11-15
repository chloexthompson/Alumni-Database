
export default function Profile(){
    return(
        <div className="profile-page">
            <div className="profile-card">

                <div className="left-col">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
                        alt="profile"
                        className="profile-img"
                    />

                    <button className="connect-btn">+ Connect</button>

                    <h3 className="skills-title">Skills/Interests</h3>

                    <div className="skills-box">
                        <li className="skill">Python ✕</li>
                        <li className="skill">Power BI ✕</li>
                        <li className="skill">Tableau ✕</li>
                        <li className="skill">Analytics ✕</li>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-col">

                <div className="profile-details">
                    <div>
                    <h2>First Name, Last Name</h2>
                    <p>Graduation Year</p>
                    <p>Referral Status</p>
                    <p>Major</p>
                    </div>

                    <div className="connections-box">
                    <h3>Connections</h3>
                    <p className="connection-num">12</p>
                    </div>
                </div>

                <textarea
                    className="description-box"
                    placeholder="Description"
                ></textarea>
                </div>

            </div>
        </div>
        // <>
        // <div>
        //     <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="profile icon" />
        // </div>
        // <div>
        //     <h2>First Name, Last Name</h2>
        //     <h2>Graduation Year</h2>
        //     <h2>Referral Status</h2>
        //     <h2>Major</h2>
        // </div>
        // <div>
        //     <h2>Connections</h2>
        //     <h1>0</h1>
        // </div>
        // <div>
        //     <h1>Description</h1>
        // </div>
        // </>
        
    );
}