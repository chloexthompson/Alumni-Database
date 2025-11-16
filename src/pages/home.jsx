import ProfileCard from "/src/components/profile-card.jsx";
import Header from "/src/components/header-icon.jsx";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  // Filter input states
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  // Fetch profiles from Firestore
  useEffect(() => {
    const fetchProfiles = async () => {
      const querySnapshot = await getDocs(collection(db, "Profiles"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProfiles(list);
      setFilteredProfiles(list); // Start with full list
    };

    fetchProfiles();
  }, []);

  const convStatus = (stat) => {
      return stat ? "Alumni" : "Student";
  }

  // Apply filters
  const applyFilters = () => {
    const results = profiles.filter((p) => {
      const stat = convStatus(p.status);

      const matchesName =
        nameFilter.trim() === "" ||
        p.name?.toLowerCase().includes(nameFilter.toLowerCase());

      const matchesStatus =
        statusFilter.trim() === "" ||
        stat?.toLowerCase() === statusFilter.toLowerCase();

      const matchesCompany =
        companyFilter.trim() === "" ||
        p.company?.toLowerCase().includes(companyFilter.toLowerCase());

      return matchesName && matchesStatus && matchesCompany;
    });

    setFilteredProfiles(results);
  };

  return (
    <>
      <div>
        <h1>networg</h1>
        <div>
          <Header />
        </div>

        {/* FILTER BAR */}
        <div className="filter-container">
          <h3>Filter by:</h3>

          {/* Name Filter */}
          <input
            type="text"
            className="filter-input"
            placeholder="Name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />

          {/* Status Dropdown */}
          <div className="filter-dropdown">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Grad State</option>
              <option value="Student">Student</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>

          {/* Company Filter */}
          <input
            type="text"
            className="filter-input"
            placeholder="Company"
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
          />

          {/* Search button */}
          <button onClick={applyFilters}>Search</button>
        </div>

        {/* PROFILE CARDS */}
        <div className="grid-container">
          {filteredProfiles.map((p) => (
            <ProfileCard
              key={p.id}
              name={p.name}
              gradStatus={p.status}
              gradYear={p.graduationYear}
            />
          ))}
        </div>
      </div>
    </>
  );
}
