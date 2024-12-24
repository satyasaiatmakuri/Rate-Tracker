import React, { useState } from "react";
import ItemList from "./components/ItemList";
import FloatingButton from "./components/FloatingButton";
import AddItemModal from "./components/AddItemModal";
import { getItems, saveItems } from "./utils/storage";
import "./App.css";

function App() {
  const [items, setItems] = useState(getItems());
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  return (
    <div className="App">
      <ItemList items={items} />
      <FloatingButton onClick={() => setModalOpen(true)} />
      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;
