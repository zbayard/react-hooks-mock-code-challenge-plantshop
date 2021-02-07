import React, {useState} from "react";

function PlantCard({id, name, image, price}) {

  const [isInStock, setIsInStock] = useState(true)

  function handleStockChange(){
    setIsInStock(!isInStock)
  }

  function removePlant(e){
    fetch(`http://localhost:6001/plants/${id}`,{
    method: 'DELETE'
    });
  }

  return (
    <li className="card" value={id}>
      <img onClick={removePlant} src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleStockChange} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
        
      )}
    </li>
  );
}

export default PlantCard;
