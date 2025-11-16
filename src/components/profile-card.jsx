import "profile-card.module.css";

/* Make a function that converts gradStatus (boolean) to a string*/


const ProfileCard = ({headshot, name, gradStatus, gradYear}) => {
    return(
        <>
        <div>
            <img src={headshot} className="headshot-shape"/>
            <div></div>
            <h2>{name}</h2>
            <div></div>
            <h3>{gradStatus}</h3>
            <div className="grad-year-box">
                Class of {gradYear}
            </div>
        </div>
  
        </>
    );
};

export default ProfileCard;