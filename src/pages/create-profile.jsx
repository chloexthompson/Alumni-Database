import { useState } from "react";
import { db, storage } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom"; 

export default function CreateProfile() {
  const navigate = useNavigate();
  const [headshot, setHeadshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [graduationYear, setYear] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setHeadshot(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      // Save profile info to Firestore
      await addDoc(collection(db, "Profiles"), {
        name,
        
        lastName,
        email,
        school,
        graduationYear,
      });

      alert("Profile created successfully!");

      // Reset form
      setName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSchool("");
      setYear("");
      setHeadshot(null);
      setPreview(null);

      // Redirect to sign-in page
      navigate("/sign-in");
    } catch (err) {
      console.error("Error creating profile: ", err);
      alert("Failed to create profile");
    }
  };

  return (
    <div className="profile-page">
      <div id="main-card">
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            position: 'absolute', 
            top: '15px', 
            left: '15px', 
            background: '#2c514c', 
            color: '#e3c0d3', 
            border: 'none', 
            borderRadius: '10px', 
            padding: '8px 16px', 
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ← Back
        </button>
        <h2 style={{ marginTop: '-20px', marginBottom: '10px', background: 'transparent' }}>Create Profile</h2>
        
        <div className="profile-container">
          {/* Left side - Profile Picture */}
          <div className="left-section">
            <label className="image-upload-card">
              {preview ? (
                <img src={preview} className="preview-image" alt="Profile" />
              ) : (
                <>
                  <div className="plus-circle">+</div>
                  <p>Add profile picture</p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {/* Right side - Form Fields */}
          <div className="right-section">
            <div className="input-row">
              <label>First Name:</label>
              <input 
                type="text"
                value={name} 
                // onChange={(e) => setFirstName(e.target.value)}
                onChange={(e) => setName(e.target.value)} 
                placeholder="First Name"
              />
            </div>
            <div className="input-row">
              <label>Last Name:</label>
              <input 
                type="text"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name"
              />
            </div>
            <div className="input-row">
              <label>Email:</label>
              <input 
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email Address"
              />
            </div>
            <div className="input-row">
              <label>School:</label>
              <input 
                type="text"
                value={school} 
                onChange={(e) => setSchool(e.target.value)} 
                placeholder="School"
              />
            </div>
            <div className="input-row">
              <label>Year:</label>
              <input 
                type="text"
                value={graduationYear} 
                onChange={(e) => setYear(e.target.value)} 
                placeholder="Year"
              />
            </div>
            <button type="button" onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}