///import ProfileCard from "/src/components/profile-card.jsx";

export default function Home() {
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
</div>
        </div>
        
        
        </>
    );
}