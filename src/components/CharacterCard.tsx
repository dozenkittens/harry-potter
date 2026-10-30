interface Character {
  name: string;
  actor: string;
  gender: string;
  house: string;
  wandCore: string;
  alive: string;
  image: string;
}

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-content">
        <h2>{character.name}</h2>
        <p>Actor: {character.actor}</p>
        <p>Gender: {character.gender}</p>
        <p>House: {character.house}</p>
        <p>Wand core: {character.wandCore}</p>
        <p>Alive: {character.alive}</p>
      </div>
    </div>
  );
}