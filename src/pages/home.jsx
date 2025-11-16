///import ProfileCard from "/src/components/profile-card.jsx";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const querySnapshot = await getDocs(collection(db, "Profiles"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfiles(list);
    };

    fetchProfiles();
  }, []);

    return(
        <>
        <div>
            <h1>
                networg
            </h1>
            <div class="filter-container">
  <h3 >Filter by:</h3>

  <input type="text" class="filter-input" placeholder="Name" />

  <div class="filter-dropdown">
    <select>
      <option>Grad State</option>
      <option>Student</option>
      <option>Alumni</option>
    </select>
  </div>

  <input type="text" class="filter-input" placeholder="Company" />

  <button> Search</button>

<div className="grid-container">
  {profiles.map((p) => (
    <ProfileCard
      key={p.id}
      name={p.name}
      gradStatus={p.status}
      gradYear={p.graduationYear}
    />
  ))}
</div>








</div>
        </div>
        
        
        </>
    );
}