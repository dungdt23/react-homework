import React from "react";

function PokemonProfile({ data }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <p className="text-lg font-bold">ID: {data.id}</p>
      <p className="text-lg font-bold">Name: {data.name}</p>
      <p className="text-lg">Weight: {data.weight}</p>
      <div className="flex justify-between">
        <img src={data.sprites.front_default} alt={data.name} className="w-32 h-32" />
        <img src={data.sprites.back_default} alt={data.name} className="w-32 h-32" />
      </div>
    </div>
  );
}

export default PokemonProfile;
