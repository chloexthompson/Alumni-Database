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
    <div className="page-container" style={{
      minHeight: '100vh',
      backgroundColor: '#e3c0d3',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      padding: '20px'
    }}>
      <div id="main-card" style={{
        width: '800px',
        minHeight: '500px',
        borderRadius: '15px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        backgroundColor: '#e1e1e1',
        margin: '30px',
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
              className="button"
              style={{
                backgroundColor: '#2c514c',
                color: '#e3c0d3',
                margin: '8px',
                padding: '5px',
                borderRadius: '10px',
                height: '40px',
                width: '110px',
                fontSize: 'medium',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "Georgia, 'Times New Roman', Times, serif"
              }}
            >
              Upload Photo
            </label>
          </div>

          {/* Right side - Enter Information */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <h2 style={{
              fontSize: 'x-large',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: 'black',
              textAlign: 'left'
            }}>
              Identity Information
            </h2>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                textAlign: 'left',
                fontSize: 'medium',
                color: 'black',
                fontWeight: 'lighter'
              }}>
                First Name
              </label>
              <input
                className="input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{
                  width: '100%',
                  height: '43px',
                  borderRadius: '30px',
                  textAlign: 'left',
                  margin: '10px 0',
                  backgroundColor: '#c8c8c8',
                  border: 'none',
                  padding: '9px',
                  fontSize: 'medium',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                textAlign: 'left',
                fontSize: 'medium',
                color: 'black',
                fontWeight: 'lighter'
              }}>
                Last Name
              </label>
              <input
                className="input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{
                  width: '100%',
                  height: '43px',
                  borderRadius: '30px',
                  textAlign: 'left',
                  margin: '10px 0',
                  backgroundColor: '#c8c8c8',
                  border: 'none',
                  padding: '9px',
                  fontSize: 'medium',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                textAlign: 'left',
                fontSize: 'medium',
                color: 'black',
                fontWeight: 'lighter'
              }}>
                Email
              </label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  height: '43px',
                  borderRadius: '30px',
                  textAlign: 'left',
                  margin: '10px 0',
                  backgroundColor: '#c8c8c8',
                  border: 'none',
                  padding: '9px',
                  fontSize: 'medium',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                textAlign: 'left',
                fontSize: 'medium',
                color: 'black',
                fontWeight: 'lighter'
              }}>
                School Name
              </label>
              <input
                className="input"
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                style={{
                  width: '100%',
                  height: '43px',
                  borderRadius: '30px',
                  textAlign: 'left',
                  margin: '10px 0',
                  backgroundColor: '#c8c8c8',
                  border: 'none',
                  padding: '9px',
                  fontSize: 'medium',
                  color: 'black'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                textAlign: 'left',
                fontSize: 'medium',
                color: 'black',
                fontWeight: 'lighter'
              }}>
                Year
              </label>
              <input
                className="input"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g., 2024"
                style={{
                  width: '100%',
                  height: '43px',
                  borderRadius: '30px',
                  textAlign: 'left',
                  margin: '10px 0',
                  backgroundColor: '#c8c8c8',
                  border: 'none',
                  padding: '9px',
                  fontSize: 'medium',
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
            className="button"
            onClick={handleSubmit}
            style={{
              backgroundColor: '#2c514c',
              color: '#e3c0d3',
              margin: '8px',
              padding: '5px',
              borderRadius: '10px',
              height: '40px',
              width: '110px',
              fontSize: 'medium',
              cursor: 'pointer',
              border: 'none',
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
          textAlign: 'center',
          fontWeight: 'lighter'
        }}>
          Already have an account?{' '}
          <span
            onClick={() => console.log('Navigate to sign in')}
            style={{
              color: '#2c514c',
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