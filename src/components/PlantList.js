import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()));

  const plantObjects = filteredPlants.map(plant => {
    return <PlantCard id={plant.id} name={plant.name} image={plant.image} price={plant.price} />
  })


  return (
    <ul className="cards">{plantObjects}</ul>
  );
}

export default PlantList;
