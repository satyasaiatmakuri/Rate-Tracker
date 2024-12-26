import React, { useState } from "react";
import ItemList from "./components/ItemList";
import FloatingButton from "./components/FloatingButton";
import AddItemModal from "./components/AddItemModal";
import { getItems, saveItems } from "./utils/storage";
import "./App.css";

function App() {
  const [items, setItems] = useState(getItems());
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // Manage the item being edited

  const handleAddItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  const openEditModal = (item) => {
    setEditingItem(item); // Set the item to be edited
    setModalOpen(true);
  };

  return (
    <div className="App">
      <ItemList items={items} onEditItem={openEditModal} />
      <FloatingButton onClick={() => setModalOpen(true)} />
      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddItem={handleAddItem}
        onUpdateItem={handleUpdateItem}
        item={editingItem} // Pass the item being edited
      />
    </div>
  );
}

export default App;
