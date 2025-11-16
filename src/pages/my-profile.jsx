import React, { useState } from 'react';

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    major: "",
    graduationYear: "",
    status: "",
    organization: "",
    role: "",
    joinedDate: "",
    location: "",
    linkedin: "",
    github: "",
    bio: "",
    skills: [],
    interests: []
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, value) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    setEditedProfile(prev => ({ ...prev, [field]: items }));
  };

  // Override ALL global styles
  const resetStyle = {
    all: 'unset',
    display: 'block',
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e5c3d1',
      padding: '20px',
      fontFamily: 'Georgia, serif',
      display: 'block',
    }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: '300',
        textAlign: 'center',
        color: '#000',
        marginBottom: '30px',
        display: 'block',
      }}>My Profile</h1>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#e6e6e6',
        padding: '40px',
        borderRadius: '25px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        display: 'block',
      }}>
        {/* Profile Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
          gap: '20px',
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#285047',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{
              color: 'white',
              fontSize: '36px',
              fontWeight: 'bold',
              background: 'none',
            }}>
              {profile.name ? profile.name.split(' ').map(n => n[0]).join('').toUpperCase() : '?'}
            </span>
          </div>
          <div style={{
            textAlign: 'left',
            flex: 1,
          }}>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter your name"
                style={{
                  padding: '8px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: '#d5d5d5',
                  outline: 'none',
                  fontSize: '24px',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 'bold',
                  width: '100%',
                  boxSizing: 'border-box',
                  textAlign: 'left',
                }}
              />
            ) : (
              <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                margin: '0 0 5px 0',
                color: '#000',
                textAlign: 'left',
              }}>{profile.name || "Your Name"}</h2>
            )}
            <p style={{
              fontSize: '16px',
              color: '#555',
              margin: '0 0 10px 0',
              textAlign: 'left',
            }}>{profile.role || "Your Role"} @ {profile.organization || "Your Organization"}</p>
            {isEditing ? (
              <select
                value={editedProfile.status}
                onChange={(e) => handleChange('status', e.target.value)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#285047',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="">Select Status</option>
                <option value="Student">Student</option>
                <option value="Alumni">Alumni</option>
              </select>
            ) : (
              <span style={{
                display: 'inline-block',
                backgroundColor: '#285047',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>{profile.status || "Select Status"}</span>
            )}
          </div>
        </div>

        {/* Edit Buttons */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          display: 'block',
        }}>
          {!isEditing ? (
            <button onClick={handleEdit} style={{
              backgroundColor: '#2C514C',
              color: 'white',
              margin: '8px',
              padding: '10px 20px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
              fontFamily: 'Georgia, serif',
            }}>Edit Profile</button>
          ) : (
            <div style={{
              display: 'inline-flex',
              gap: '10px',
            }}>
              <button onClick={handleSave} style={{
                backgroundColor: '#2C514C',
                color: 'white',
                margin: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                fontFamily: 'Georgia, serif',
              }}>Save</button>
              <button onClick={handleCancel} style={{
                backgroundColor: '#C8C8C8',
                color: '#4C4C4C',
                margin: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                fontFamily: 'Georgia, serif',
              }}>Cancel</button>
            </div>
          )}
        </div>

        {/* About Me */}
        <div style={{
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid #ccc',
          display: 'block',
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#000',
            textAlign: 'left',
          }}>About Me</h2>
          {isEditing ? (
            <textarea
              value={editedProfile.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              placeholder="Tell us about yourself..."
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '12px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: '#d5d5d5',
                outline: 'none',
                fontSize: '14px',
                fontFamily: 'Georgia, serif',
                resize: 'vertical',
                boxSizing: 'border-box',
                textAlign: 'left',
              }}
            />
          ) : (
            <p style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#333',
              textAlign: 'left',
            }}>{profile.bio || "No bio added yet."}</p>
          )}
        </div>

        {/* Contact Information */}
        <div style={{
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid #ccc',
          display: 'block',
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#000',
            textAlign: 'left',
          }}>Contact Information</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px',
          }}>
            {[
              { label: 'Email', field: 'email', type: 'email', placeholder: 'your.email@umd.edu' },
              { label: 'Phone', field: 'phone', type: 'tel', placeholder: '(123) 456-7890' },
              { label: 'Location', field: 'location', type: 'text', placeholder: 'City, State' },
              { label: 'LinkedIn', field: 'linkedin', type: 'text', placeholder: 'linkedin.com/in/yourname' },
              { label: 'GitHub', field: 'github', type: 'text', placeholder: 'github.com/yourname' },
            ].map(({ label, field, type, placeholder }) => (
              <div key={field} style={{ textAlign: 'left' }}>
                <label style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#555',
                  display: 'block',
                  marginBottom: '5px',
                  textAlign: 'left',
                }}>{label}:</label>
                {isEditing ? (
                  <input
                    type={type}
                    value={editedProfile[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={placeholder}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '20px',
                      border: 'none',
                      backgroundColor: '#d5d5d5',
                      outline: 'none',
                      fontSize: '14px',
                      fontFamily: 'Georgia, serif',
                      width: '100%',
                      boxSizing: 'border-box',
                      textAlign: 'left',
                    }}
                  />
                ) : (
                  (field === 'linkedin' || field === 'github') && profile[field] ? (
                    <a href={`https://${profile[field]}`} style={{
                      fontSize: '14px',
                      color: '#285047',
                      textDecoration: 'none',
                    }} target="_blank" rel="noopener noreferrer">
                      {profile[field]}
                    </a>
                  ) : (
                    <span style={{
                      fontSize: '14px',
                      color: '#000',
                    }}>{profile[field] || "Not provided"}</span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic & Organization combined for brevity */}
        {[
          { title: 'Academic Information', fields: [
            { label: 'Major', field: 'major', placeholder: 'Your Major' },
            { label: 'Graduation Year', field: 'graduationYear', placeholder: '2025', width: '120px' },
          ]},
          { title: 'Organization', fields: [
            { label: 'Role', field: 'role', placeholder: 'Your Role' },
            { label: 'Joined', field: 'joinedDate', placeholder: 'Month Year' },
          ]},
        ].map((section) => (
          <div key={section.title} style={{
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '1px solid #ccc',
            display: 'block',
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#000',
              textAlign: 'left',
            }}>{section.title}</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px',
            }}>
              {section.fields.map(({ label, field, placeholder, width }) => (
                <div key={field} style={{ textAlign: 'left' }}>
                  <label style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#555',
                    display: 'block',
                    marginBottom: '5px',
                    textAlign: 'left',
                  }}>{label}:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      placeholder={placeholder}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '20px',
                        border: 'none',
                        backgroundColor: '#d5d5d5',
                        outline: 'none',
                        fontSize: '14px',
                        fontFamily: 'Georgia, serif',
                        width: width || '100%',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                      }}
                    />
                  ) : (
                    <span style={{
                      fontSize: '14px',
                      color: '#000',
                    }}>{profile[field] || "Not provided"}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Skills & Interests */}
        {['skills', 'interests'].map((arrayField) => (
          <div key={arrayField} style={{
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '1px solid #ccc',
            display: 'block',
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#000',
              textAlign: 'left',
            }}>{arrayField === 'skills' ? 'Skills' : 'Interests'}</h2>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile[arrayField].join(', ')}
                onChange={(e) => handleArrayChange(arrayField, e.target.value)}
                placeholder={`Separate ${arrayField} with commas (e.g. JavaScript, Python, React)`}
                style={{
                  padding: '8px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  backgroundColor: '#d5d5d5',
                  outline: 'none',
                  fontSize: '14px',
                  fontFamily: 'Georgia, serif',
                  width: '100%',
                  boxSizing: 'border-box',
                  textAlign: 'left',
                }}
              />
            ) : (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}>
                {profile[arrayField].length > 0 ? (
                  profile[arrayField].map((item, index) => (
                    <span key={index} style={{
                      backgroundColor: '#285047',
                      color: 'white',
                      padding: '6px 15px',
                      borderRadius: '15px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}>
                      {item}
                    </span>
                  ))
                ) : (
                  <span style={{
                    fontSize: '14px',
                    color: '#000',
                  }}>No {arrayField} added yet</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}