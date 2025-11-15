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