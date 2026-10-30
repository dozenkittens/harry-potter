import { useState } from "react";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { CharacterCard } from "./components/CharacterCard";
import "./App.css";

import harryImg from "./assets/harry.jpg";
import hermioneImg from "./assets/hermione.jpg";
import dracoImg from "./assets/draco.jpg";

const mockCharacters = [
  {
    name: "Hermione Granger",
    actor: "Emma Watson",
    gender: "female",
    house: "Gryffindor",
    wandCore: "dragon heartstring",
    alive: "yes",
    image: hermioneImg,
  },
  {
    name: "Draco Malfoy",
    actor: "Tom Felton",
    gender: "male",
    house: "Slytherin",
    wandCore: "unicorn tail-hair",
    alive: "yes",
    image: dracoImg,
  },
  {
    name: "Harry Potter",
    actor: "Daniel Radcliffe",
    gender: "male",
    house: "Gryffindor",
    wandCore: "phoenix feather",
    alive: "yes",
    image: harryImg,
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("");

  const filtered = mockCharacters.filter((char) => {
    const matchName = char.name.toLowerCase().includes(search.toLowerCase());
    const matchSchool = school ? char.house === school : true;
    return matchName && matchSchool;
  });

  return (
    <div className="app">
      <Header />
      <Filters
        searchQuery={search}
        onSearchChange={setSearch}
        school={school}
        onSchoolChange={setSchool}
      />
      <main className="grid-container">
        {filtered.map((char, index) => (
          <CharacterCard key={index} character={char} />
        ))}
      </main>
    </div>
  );
}

export default App;
