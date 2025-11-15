 import { useState } from 'react';

export default function CreateProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [year, setYear] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log('Creating profile:', { 
      firstName, 
      lastName, 
      email, 
      schoolName, 
      year,
      profilePic
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e3c0d3',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      padding: '20px'
    }}>
      <div style={{
        width: '800px',
        minHeight: '600px',
        borderRadius: '15px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        backgroundColor: '#e1e1e1',
        padding: '40px'
      }}>
        <h1 style={{
          fontSize: 'xxx-large',
          fontWeight: 'lighter',
          marginBottom: '40px',
          color: 'black',
          textAlign: 'center'
        }}>
          Profile Creation
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* Left side - Profile Picture */}
          <div style={{
            flex: '0 0 250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '15px',
              backgroundColor: 'white',
              border: '2px dashed #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {profilePic ? (
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <span style={{
                  color: '#999',
                  fontSize: '14px',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  Click below to add profile picture
                </span>
              )}
            </div>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id="profile-pic-input"
            />
            <label
              htmlFor="profile-pic-input"
              style={{
                backgroundColor: '#2C514C',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '30px',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: "Georgia, 'Times New Roman', Times, serif"
              }}
            >
              Upload Photo
            </label>
          </div>

          {/* Right side - Please enter */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <h2 style={{
              fontSize: 'x-large',
              fontWeight: 'lighter',
              marginBottom: '10px',
              color: 'black',
              textAlign: 'left'
            }}>
              Identity Information
            </h2>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                textAlign: 'left',
                fontSize: '16px',
                color: 'black'
              }}>
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  padding: '0 20px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                textAlign: 'left',
                fontSize: '16px',
                color: 'black'
              }}>
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  padding: '0 20px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                textAlign: 'left',
                fontSize: '16px',
                color: 'black'
              }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  padding: '0 20px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                textAlign: 'left',
                fontSize: '16px',
                color: 'black'
              }}>
                School Name
              </label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  padding: '0 20px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                textAlign: 'left',
                fontSize: '16px',
                color: 'black'
              }}>
                Year
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g., 2024"
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  padding: '0 20px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px'
        }}>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#2C514C',
              color: 'white',
              padding: '12px 50px',
              borderRadius: '30px',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              fontFamily: "Georgia, 'Times New Roman', Times, serif"
            }}
          >
            Create Profile
          </button>
        </div>

        <p style={{
          marginTop: '20px',
          fontSize: '14px',
          color: 'black',
          textAlign: 'center'
        }}>
          Already have an account?{' '}
          <span
            onClick={() => console.log('Navigate to sign in')}
            style={{
              color: '#2C514C',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}