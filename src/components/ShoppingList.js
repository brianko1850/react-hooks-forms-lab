import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemAdd }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchData, setSearchData] = useState("")

  const [name, setName] = useState("")
  const [selectCategory, setSelectCategory] = useState("Produce")
  const itemName =(e)=>{
  setName(e.target.value)
}

  const itemCategory =(e) =>{
  setSelectCategory(e.target.value)
}

  function handleSubmit(newItem) {
    console.log("newItem on ShoppingList", newItem)
  }


  function handleSearch(event) {
    setSearchData(event.target.value)

  }
 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsByCategory = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } return item.category === selectedCategory
  })

  const itemsToDisplay = itemsByCategory.filter((filteredItem) => {
    return filteredItem.name.toLowerCase().includes(searchData.toLocaleLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} name={name} selectCategory={selectCategory} onNameChange={itemName} onSelectChange={itemCategory}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} searchData={searchData}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
