import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, onSelectChange, onNameChange, name, selectCategory }) {



const newItem = {
  id: uuid(), 
  name: name,
  category: selectCategory,
};
   
  console.log("newItem", newItem)

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit(newItem)}>
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
