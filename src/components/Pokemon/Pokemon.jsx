import { useEffect } from "react";
import React, { useState } from "react";
import PokemonProfile from "./PokemonProfile";
import axios from "axios";

function Pokemon() {
  const [selectedId, setSelectedId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  const increment = () => {
    setSelectedId((prevId) => prevId + 1);
  };

  const decrement = () => {
    setSelectedId((prevId) => (prevId > 1 ? prevId - 1 : 1));
  };

  useEffect(() => {
    getData();
  }, [selectedId]);

  const getData = async () => {
    try {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${selectedId}`
      );
      setPokemonData(result.data);
      console.log(selectedId);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center mb-4">
        <p className="text-xl font-bold">Option selected: Pokemon</p>
        <div className="mt-4">
          {pokemonData && <PokemonProfile data={pokemonData} />}
        </div>
        <div className="mt-10">
          <button
            onClick={decrement}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Previous
          </button>
          <button
            onClick={increment}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
