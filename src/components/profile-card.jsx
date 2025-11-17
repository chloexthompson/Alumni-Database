// import styles from "./profile-card.module.css";

// const showGradStatus = (gradStatus) => {
//   return gradStatus ? "Alumni" : "Student";
// };

// const ProfileCard = ({ name, gradStatus, gradYear }) => {
//   return (
   
//     <div id={styles.card} >
//       <img src="src/assets/profile.png" className={styles.headshotShape}  />

//       <h2 className={styles.name}>{name}</h2>

//       <h3 className={styles.status}>{showGradStatus(gradStatus)}</h3>

//       <div className={styles.gradYearBox}>
//         Class of {gradYear}
//       </div>

//       <a href="/view-profile">
//       <button>View Profile</button>
//       </a>
//     </div>
   
//   );
// };

// export default ProfileCard;

import { useNavigate } from "react-router-dom";
import styles from "./profile-card.module.css";

const showGradStatus = (gradStatus) => {
  return gradStatus ? "Alumni" : "Student";
};

const ProfileCard = ({ name, gradStatus, gradYear, major, referralStatus, description, skills }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    // Split name into first and last
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    navigate('/view-profile', {
      state: {
        firstName,
        lastName,
        major,
        gradYear,
        referralStatus,
        description,
        skills
      }
    });
  };

  return (
    <div id={styles.card}>
      <img src="src/assets/profile.png" className={styles.headshotShape} />

      <h2 className={styles.name}>{name}</h2>

      <h3 className={styles.status}>{showGradStatus(gradStatus)}</h3>

      <div className={styles.gradYearBox}>
        Class of {gradYear}
      </div>

      <button onClick={handleViewProfile}>View Profile</button>
    </div>
  );
};

export default ProfileCard;