import React, { useState } from 'react';

function CreateProfile() {
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
    <div className="page-container" style={{ minHeight: '100vh' }}>
      <style>{`
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
        <h2 style={{ marginBottom: '5px', background: 'transparent' }}>Create Profile</h2>
        
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
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="school"
              placeholder="School"
              value={formData.school}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateProfile;