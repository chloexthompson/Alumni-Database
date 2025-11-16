import styles from "./profile-card.module.css";

const showGradStatus = (gradStatus) => {
  return gradStatus ? "Alumni" : "Student";
};

const ProfileCard = ({ name, gradStatus, gradYear }) => {
  return (
    <div className={styles.card}>
     {/* <img src={headshot} className={styles.headshot} alt="profile headshot" />*/ }

      <h2 className={styles.name}>{name}</h2>

      <h3 className={styles.status}>{showGradStatus(gradStatus)}</h3>

      <div className={styles.gradYearBox}>
        Class of {gradYear}
      </div>
    </div>
  );
};

export default ProfileCard;
