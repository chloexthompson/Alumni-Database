export default function Home() {
    return(
        <>
        <div>
            <h1>
                networg
            </h1>
            <div class="filter-container">
  <label class="filter-label">Filter by:</label>

  <input type="text" class="filter-input" placeholder="Name" />

  <div class="filter-dropdown">
    <select>
      <option>Grad State</option>
    </select>
  </div>

  <input type="text" class="filter-input" placeholder="Company" />

  <button> Search</button>
</div>
        </div>
        
        
        </>
    );
}