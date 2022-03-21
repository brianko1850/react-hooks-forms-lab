import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("")
  const [selectCategory, setSelectCategory] = useState("Produce")
  const onNameChange =(e)=>{
    setName(e.target.value)
  }
  
    const onSelectChange =(e) =>{
    setSelectCategory(e.target.value)
  }

const newItem = {
  id: uuid(), 
  name: name,
  category: selectCategory,
};


function handleSubmit(e) {
  e.preventDefault();
  onItemFormSubmit(newItem)
}
  // console.log("newItem", newItem)

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onSelectChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
