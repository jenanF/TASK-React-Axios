import React from "react";
import PetDetail from "./PetDetail";

function passId(p) {

  console.log(p.id)
  return (
    <PetDetail id={p.id} />
  )

}

const PetItem = ({ pet }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{pet.name}</h1>
      <img
        src={pet.image}
        alt={`${pet.name}-image`}
        className="w-[200px] rounded-md
      "
      />
      <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white" onClick={() => passId(pet)}>
        View
      </button>
    </div>
  );
};

export default PetItem;
