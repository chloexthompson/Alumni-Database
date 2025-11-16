import React, { useState } from 'react';
import Header from  "../components/header-icon.jsx";

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    major: "",
    graduationYear: "",
    status: "Current Student",
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

  return (
    <div style={styles.container}>
      <h1 className="title">My Profile</h1>
      
      <div style={styles.profileCard} className="card">
        {/* Profile Header */}
        <div style={styles.header}>
          <div style={styles.avatar}>
            <span style={styles.avatarText}>
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div style={styles.headerInfo}>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                style={{...styles.input, fontSize: '24px', fontWeight: 'bold', width: '100%'}}
              />
            ) : (
              <h2 style={styles.name}>{profile.name}</h2>
            )}
            <p style={styles.subtitle}>{profile.role} @ {profile.organization}</p>
            <span style={styles.statusBadge}>{profile.status}</span>
          </div>
        </div>

        {/* Edit Buttons */}
        <div style={styles.editButtons}>
          {!isEditing ? (
            <button onClick={handleEdit}>Edit Profile</button>
          ) : (
            <div style={styles.buttonGroup}>
              <button onClick={handleSave} style={{marginRight: '10px'}}>Save</button>
              <button onClick={handleCancel} style={{backgroundColor: '#666'}}>Cancel</button>
            </div>
          )}
        </div>

        {/* About Me */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          {isEditing ? (
            <textarea
              value={editedProfile.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              style={styles.textarea}
            />
          ) : (
            <p style={styles.text}>{profile.bio}</p>
          )}
        </div>

        {/* Contact Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <label style={styles.label}>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <span style={styles.value}>{profile.email}</span>
              )}
            </div>
            <div style={styles.infoItem}>
              <label style={styles.label}>Phone:</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <span style={styles.value}>{profile.phone}</span>
              )}
            </div>
            <div style={styles.infoItem}>
              <label style={styles.label}>Location:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <span style={styles.value}>{profile.location}</span>
              )}
            </div>
            <div style={styles.infoItem}>
              <label style={styles.label}>LinkedIn:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <a href={`https://${profile.linkedin}`} style={styles.link} target="_blank" rel="noopener noreferrer">
                  {profile.linkedin}
                </a>
              )}
            </div>
            <div style={styles.infoItem}>
              <label style={styles.label}>GitHub:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.github}
                  onChange={(e) => handleChange('github', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <a href={`https://${profile.github}`} style={styles.link} target="_blank" rel="noopener noreferrer">
                  {profile.github}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Academic Information</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <label style={styles.label}>Major:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.major}
                  onChange={(e) => handleChange('major', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <span style={styles.value}>{profile.major}</span>
              )}
            </div>
            <div style={styles.infoItem}>
              <label style={styles.label}>Graduation Year:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.graduationYear}
                  onChange={(e) => handleChange('graduationYear', e.target.value)}
                  style={{...styles.input, width: '100px'}}
                />
              ) : (
                <span style={styles.value}>{profile.graduationYear}</span>
              )}
            </div>
          </div>
        </div>

        {/* Organization Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Organization</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <label style={styles.label}>Role:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  style={styles.input}
                />
              ) : (
                <span style={styles.value}>{profile.role}</span>
              )}
            </div>
            <div style={styles.infoItem}>
              <label style={styles.label}>Joined:</label>
              <span style={styles.value}>{profile.joinedDate}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          {isEditing ? (
            <input
              type="text"
              value={editedProfile.skills.join(', ')}
              onChange={(e) => handleArrayChange('skills', e.target.value)}
              placeholder="Separate skills with commas"
              style={{...styles.input, width: '100%'}}
            />
          ) : (
            <div style={styles.tagContainer}>
              {profile.skills.map((skill, index) => (
                <span key={index} style={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Interests */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Interests</h2>
          {isEditing ? (
            <input
              type="text"
              value={editedProfile.interests.join(', ')}
              onChange={(e) => handleArrayChange('interests', e.target.value)}
              placeholder="Separate interests with commas"
              style={{...styles.input, width: '100%'}}
            />
          ) : (
            <div style={styles.tagContainer}>
              {profile.interests.map((interest, index) => (
                <span key={index} style={styles.tag}>
                  {interest}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#e5c3d1',
    padding: '20px',
    fontFamily: 'Georgia, serif',
  },
  profileCard: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#e6e6e6',
    padding: '40px',
    borderRadius: '25px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    gap: '20px',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#285047',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarText: {
    color: 'white',
    fontSize: '36px',
    fontWeight: 'bold',
  },
  headerInfo: {
    textAlign: 'left',
    flex: 1,
  },
  name: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#555',
    margin: '0 0 10px 0',
  },
  statusBadge: {
    display: 'inline-block',
    backgroundColor: '#285047',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  editButtons: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'inline-flex',
    gap: '10px',
  },
  section: {
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #ccc',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#000',
    textAlign: 'left',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333',
    textAlign: 'left',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
  },
  infoItem: {
    textAlign: 'left',
  },
  label: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
    display: 'block',
    marginBottom: '5px',
  },
  value: {
    fontSize: '14px',
    color: '#000',
  },
  link: {
    fontSize: '14px',
    color: '#285047',
    textDecoration: 'none',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#d5d5d5',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'Georgia, serif',
  },
  textarea: {
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
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    backgroundColor: '#285047',
    color: 'white',
    padding: '6px 15px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};