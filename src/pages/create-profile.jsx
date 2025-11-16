import { useState } from "react";
import { db, storage } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom"; 

export default function CreateProfile() {
  const navigate = useNavigate();
  const [headshot, setHeadshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeadshot(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      // Save profile info to Firestore
      await addDoc(collection(db, "Profiles"), {
        firstName,
        lastName,
        email,
        school,
        year,
      });

      alert("Profile created successfully!");

      // Reset form
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
    <div className="page-container">
      <div id="main-card" style={{ 
        width: '50rem',
        height: '28rem',
        borderRadius: '15px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        backgroundColor: '#e1e1e1',
        margin: '30px auto',
        padding: '2rem',
        position: 'relative'
      }}>
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
            fontSize: '14px',
            height: 'auto',
            width: 'auto'
          }}
        >
          ← Back
        </button>
        
        <h2 style={{ 
          marginTop: '-20px', 
          marginBottom: '20px', 
          background: 'transparent',
          fontSize: 'x-large',
          fontWeight: 'bold'
        }}>
          Create Profile
        </h2>
        
        <div style={{ 
          display: 'flex',
          gap: '50px',
          padding: '0',
          background: 'transparent',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          {/* Left side - Profile Picture */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <label style={{
              width: '230px',
              height: '280px',
              background: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              overflow: 'hidden'
            }}>
              {preview ? (
                <img 
                  src={preview} 
                  alt="Profile" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              ) : (
                <>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: '#e8e8e8',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '70px',
                    color: '#555',
                    marginBottom: '10px'
                  }}>
                    +
                  </div>
                  <p style={{ margin: 0, fontSize: '16px' }}>Add profile picture</p>
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
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '420px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '16px',
                width: '100px',
                textAlign: 'right',
                marginRight: '15px',
                marginBottom: '0',
                flexShrink: 0
              }}>
                First Name:
              </label>
              <input 
                type="text"
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="First Name"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: '1px solid #ccc',
                  background: '#f2f2f2',
                  fontSize: '16px',
                  maxWidth: '300px',
                  margin: 0,
                  height: 'auto',
                  textAlign: 'left'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '16px',
                width: '100px',
                textAlign: 'right',
                marginRight: '15px',
                marginBottom: '0',
                flexShrink: 0
              }}>
                Last Name:
              </label>
              <input 
                type="text"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: '1px solid #ccc',
                  background: '#f2f2f2',
                  fontSize: '16px',
                  maxWidth: '300px',
                  margin: 0,
                  height: 'auto',
                  textAlign: 'left'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '16px',
                width: '100px',
                textAlign: 'right',
                marginRight: '15px',
                marginBottom: '0',
                flexShrink: 0
              }}>
                Email:
              </label>
              <input 
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email Address"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: '1px solid #ccc',
                  background: '#f2f2f2',
                  fontSize: '16px',
                  maxWidth: '300px',
                  margin: 0,
                  height: 'auto',
                  textAlign: 'left'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '16px',
                width: '100px',
                textAlign: 'right',
                marginRight: '15px',
                marginBottom: '0',
                flexShrink: 0
              }}>
                School:
              </label>
              <input 
                type="text"
                value={school} 
                onChange={(e) => setSchool(e.target.value)} 
                placeholder="School"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: '1px solid #ccc',
                  background: '#f2f2f2',
                  fontSize: '16px',
                  maxWidth: '300px',
                  margin: 0,
                  height: 'auto',
                  textAlign: 'left'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <label style={{
                fontSize: '16px',
                width: '100px',
                textAlign: 'right',
                marginRight: '15px',
                marginBottom: '0',
                flexShrink: 0
              }}>
                Year:
              </label>
              <input 
                type="text"
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                placeholder="Year"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: '1px solid #ccc',
                  background: '#f2f2f2',
                  fontSize: '16px',
                  maxWidth: '300px',
                  margin: 0,
                  height: 'auto',
                  textAlign: 'left'
                }}
              />
            </div>
            
            <button 
              type="button" 
              onClick={handleSubmit}
              style={{
                backgroundColor: '#2c514c',
                color: '#e3c0d3',
                margin: '20px auto 0',
                padding: '5px',
                borderRadius: '10px',
                height: '40px',
                width: '110px',
                fontSize: 'medium',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}