import React, { useState } from 'react';

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
    <div className="profile-container">
      <h1 className="title">My Profile</h1>
      
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <span className="profile-avatar-text">
              {profile.name ? profile.name.split(' ').map(n => n[0]).join('').toUpperCase() : '?'}
            </span>
          </div>
          <div className="profile-header-info">
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter your name"
                className="profile-input"
                style={{fontSize: '24px', fontWeight: 'bold', width: '100%'}}
              />
            ) : (
              <h2 className="profile-name">{profile.name || "Your Name"}</h2>
            )}
            <p className="profile-subtitle">{profile.role || "Your Role"} @ {profile.organization || "Your Organization"}</p>
            <span className="profile-status-badge">{profile.status}</span>
          </div>
        </div>

        {/* Edit Buttons */}
        <div className="profile-edit-buttons">
          {!isEditing ? (
            <button onClick={handleEdit} className="button">Edit Profile</button>
          ) : (
            <div className="profile-button-group">
              <button onClick={handleSave} className="button" style={{marginRight: '10px'}}>Save</button>
              <button onClick={handleCancel} className="button" style={{backgroundColor: '#666'}}>Cancel</button>
            </div>
          )}
        </div>

        {/* About Me */}
        <div className="profile-section">
          <h2 className="profile-section-title">About Me</h2>
          {isEditing ? (
            <textarea
              value={editedProfile.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              placeholder="Tell us about yourself..."
              className="profile-textarea"
            />
          ) : (
            <p className="profile-text">{profile.bio || "No bio added yet."}</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="profile-section">
          <h2 className="profile-section-title">Contact Information</h2>
          <div className="profile-info-grid">
            <div className="profile-info-item">
              <label className="profile-label">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your.email@umd.edu"
                  className="profile-input"
                />
              ) : (
                <span className="profile-value">{profile.email || "Not provided"}</span>
              )}
            </div>
            <div className="profile-info-item">
              <label className="profile-label">Phone:</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="(123) 456-7890"
                  className="profile-input"
                />
              ) : (
                <span className="profile-value">{profile.phone || "Not provided"}</span>
              )}
            </div>
            <div className="profile-info-item">
              <label className="profile-label">Location:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="City, State"
                  className="profile-input"
                />
              ) : (
                <span className="profile-value">{profile.location || "Not provided"}</span>
              )}
            </div>
            <div className="profile-info-item">
              <label className="profile-label">LinkedIn:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  placeholder="linkedin.com/in/yourname"
                  className="profile-input"
                />
              ) : (
                profile.linkedin ? (
                  <a href={`https://${profile.linkedin}`} className="profile-link" target="_blank" rel="noopener noreferrer">
                    {profile.linkedin}
                  </a>
                ) : (
                  <span className="profile-value">Not provided</span>
                )
              )}
            </div>
            <div className="profile-info-item">
              <label className="profile-label">GitHub:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.github}
                  onChange={(e) => handleChange('github', e.target.value)}
                  placeholder="github.com/yourname"
                  className="profile-input"
                />
              ) : (
                profile.github ? (
                  <a href={`https://${profile.github}`} className="profile-link" target="_blank" rel="noopener noreferrer">
                    {profile.github}
                  </a>
                ) : (
                  <span className="profile-value">Not provided</span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="profile-section">
          <h2 className="profile-section-title">Academic Information</h2>
          <div className="profile-info-grid">
            <div className="profile-info-item">
              <label className="profile-label">Major:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.major}
                  onChange={(e) => handleChange('major', e.target.value)}
                  placeholder="Your Major"
                  className="profile-input"
                />
              ) : (
                <span className="profile-value">{profile.major || "Not provided"}</span>
              )}
            </div>
            <div className="profile-info-item">
              <label className="profile-label">Graduation Year:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.graduationYear}
                  onChange={(e) => handleChange('graduationYear', e.target.value)}
                  placeholder="2025"
                  className="profile-input"
                  style={{width: '100px'}}
                />
              ) : (
                <span className="profile-value">{profile.graduationYear || "Not provided"}</span>
              )}
            </div>
          </div>
        </div>

        {/* Organization Information */}
        <div className="profile-section">
          <h2 className="profile-section-title">Organization</h2>
          <div className="profile-info-grid">
            <div className="profile-info-item">
              <label className="profile-label">Role:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  placeholder="Your Role"
                  className="profile-input"
                />
              ) : (
                <span className="profile-value">{profile.role || "Not provided"}</span>
              )}
            </div>
            <div className="profile-info-item">
              <label className="profile-label">Joined:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.joinedDate}
                  onChange={(e) => handleChange('joinedDate', e.target.value)}
                  placeholder="Month Year"
                  className="profile-input"
                />
              ) : (
                <span className="profile-value">{profile.joinedDate || "Not provided"}</span>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="profile-section">
          <h2 className="profile-section-title">Skills</h2>
          {isEditing ? (
            <input
              type="text"
              value={editedProfile.skills.join(', ')}
              onChange={(e) => handleArrayChange('skills', e.target.value)}
              placeholder="Separate skills with commas (e.g. JavaScript, Python, React)"
              className="profile-input"
              style={{width: '100%'}}
            />
          ) : (
            <div className="profile-tag-container">
              {profile.skills.length > 0 ? (
                profile.skills.map((skill, index) => (
                  <span key={index} className="profile-tag">
                    {skill}
                  </span>
                ))
              ) : (
                <span className="profile-value">No skills added yet</span>
              )}
            </div>
          )}
        </div>

        {/* Interests */}
        <div className="profile-section">
          <h2 className="profile-section-title">Interests</h2>
          {isEditing ? (
            <input
              type="text"
              value={editedProfile.interests.join(', ')}
              onChange={(e) => handleArrayChange('interests', e.target.value)}
              placeholder="Separate interests with commas (e.g. AI/ML, Startups, Web Dev)"
              className="profile-input"
              style={{width: '100%'}}
            />
          ) : (
            <div className="profile-tag-container">
              {profile.interests.length > 0 ? (
                profile.interests.map((interest, index) => (
                  <span key={index} className="profile-tag">
                    {interest}
                  </span>
                ))
              ) : (
                <span className="profile-value">No interests added yet</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}