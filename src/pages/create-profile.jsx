import React, { useState } from 'react';

function App() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    year: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Profile Data:', formData);
    console.log('Profile Image:', profileImage);
    alert('Profile saved successfully!');
  };

  return (
    <div className="page-container" style={{ minHeight: '100vh', display: 'flex' }}>
      <style>{`
        * {
          margin: 0;
          padding: 3px;
          box-sizing: border-box;
          background: #e3c0d3;
          font-family: Georgia, 'Times New Roman', Times, serif;
          color: black;
          font-weight: lighter;
          text-align: center;
          align-items: center;
          justify-content: center;
        }

        #main-card .input {
          width: 250px;
          height: 43px;
          border-radius: 30px;
          text-align: left;
          margin: 10px;
          background-color: #c8c8c8;
          box-shadow: 0;
          padding: 9px;
          font-size: medium;
        }

        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #main-card {
          width: 700px;
          height: 450px;
          border-radius: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          background-color: #e1e1e1;
          margin: 30px;
          padding: 2rem;
        }

        h1 {
          font-size: xxx-large;
          font-weight: lighter;
        }

        h2 {
          font-size: x-large;
          font-weight: bold;
        }

        #main-card .button {
          background-color: #2c514c;
          color: #e3c0d3;
          margin: 8px;
          padding: 5px;
          border-radius: 10px;
          height: 40px;
          width: 110px;
          align-items: center;
          font-size: medium;
          cursor: pointer;
          border: none;
        }

        .profile-content {
          display: flex;
          gap: 30px;
          align-items: flex-start;
          background: transparent;
        }

        .profile-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          background: transparent;
        }

        .profile-picture-container {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #c8c8c8;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          position: relative;
        }

        .profile-picture-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-picture-placeholder {
          font-size: 14px;
          color: #666;
          background: transparent;
        }

        .upload-button {
          background-color: #2c514c;
          color: #e3c0d3;
          padding: 8px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-size: small;
          border: none;
        }

        .profile-right {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          flex: 1;
        }

        input[type="file"] {
          display: none;
        }
      `}</style>

      <div id="main-card">
        <h2 style={{ marginBottom: '20px', background: 'transparent' }}>Create Profile</h2>
        
        <div className="profile-content">
          <div className="profile-left">
            <label htmlFor="file-upload">
              <div className="profile-picture-container">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" />
                ) : (
                  <div className="profile-picture-placeholder">
                    Click to add photo
                  </div>
                )}
              </div>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <label htmlFor="file-upload">
              <span className="upload-button">Upload Photo</span>
            </label>
          </div>

          <div className="profile-right">
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="text"
              name="school"
              placeholder="School"
              value={formData.school}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="text"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button className="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default App;