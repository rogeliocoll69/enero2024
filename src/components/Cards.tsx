import React, { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function DragonBallCards() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://dragonball-api.com/api/characters");
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      const data = await response.json();
      setCharacters(data.items.slice(0, 7));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return <div className="text-center text-lg p-4">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
      <img
        src={character.image || "/placeholder.svg"}
        alt={character.name}
        className="w-28 h-29 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2 text-center">{character.name}</h2>
      <p className="text-gray-600 text-sm text-justify mt-1 line-clamp-3">
        {showFullDescription
          ? character.description || "Descripción no disponible"
          : `${(character.description || "Descripción no disponible").slice(50, 100)}...`}
      </p>
      <button
        onClick={() => setShowFullDescription(!showFullDescription)}
        className="text-blue-500 text-sm mt-2 mr-0"
      >
        {showFullDescription ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}