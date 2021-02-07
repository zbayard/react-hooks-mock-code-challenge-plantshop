import React,{useState} from "react";

function NewPlantForm({handleNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e){
    e.preventDefault();

    const newPlantObj = {
      name,
      image,
      price: parseInt(price)
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlantObj),
    })
    .then(response => response.json())
    .then(data => {
      handleNewPlant(data);
    })

    
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e=>setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={e=>setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input value={price} onChange={e=>setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
