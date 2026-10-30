interface FiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  school: string;
  onSchoolChange: (val: string) => void;
}

export function Filters({ searchQuery, onSearchChange, school, onSchoolChange }: FiltersProps) {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Hermione" 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>School</label>
        <select value={school} onChange={(e) => onSchoolChange(e.target.value)}>
          <option value="">Choose one</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>
    </div>
  );
}