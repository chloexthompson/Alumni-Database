import { useState } from "react";
import { db, storage } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom"; 

export default function CreateProfile() {
  const navigate = useNavigate()
  const [headshot, setHeadshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [status, setStatus] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setHeadshot(file);
    setPreview(URL.createObjectURL(file));
  };

const handleSubmit = async () => {
  try {
    let imageUrl = "";
    if (headshot) {
      const storageRef = ref(storage, `headshots/${headshot.name}`);
      await uploadBytes(storageRef, headshot);
      imageUrl = await getDownloadURL(storageRef);
    }

    // Save profile info to Firestore
    await addDoc(collection(db, "Profiles"), {
      name,
      email,
      graduationYear: gradYear,
      linkedin,
      status: status,       // your graduation toggle
      headshot: imageUrl,
    });

    alert("Profile created successfully!");

    // Reset form
    setName("");
    setEmail("");
    setGradYear("");
    setLinkedin("");
    setStatus(false);
    setHeadshot(null);
    setPreview(null);

    // Redirect to sign-in page
    navigate("/sign-in"); // <-- make sure you have useNavigate()
  } catch (err) {
    console.error("Error creating profile: ", err);
    alert("Failed to create profile");
  }
};
  return (
    <div className="profile-page">
      <h1>networg</h1>
      <div id="main-card">
        <h2>Create Profile</h2>
        <div className="profile-container">
          {/* Left side */}
          <div className="left-section">
            <label className="image-upload-card">
              {preview ? (
                <img src={preview} className="preview-image" alt="Headshot" />
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

          {/* Right side */}
          <div className="right-section">
            <div className="input-row">
              <label>Name:</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-row">
              <label>Email Address:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-row">
              <label>Graduation Year:</label>
              <input value={gradYear} onChange={(e) => setGradYear(e.target.value)} />
            </div>
               <div className="input-row">
  <label>Graduated?</label>
  <label className="toggle-switch">
    <input
      type="checkbox"
      checked={status}
      onChange={() => setStatus(!status)}
    />
    <span className="slider"></span>
  </label>
</div>

            <div className="input-row">
              <label>LinkedIn URL:</label>
              <input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="linkedin.com/in/..."
              />
            </div>
            <button type="button" onClick={handleSubmit}>Create Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
