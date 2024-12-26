import React, { useState, useEffect } from "react";
import "./AddItemModal.css";
const AddItemModal = ({ isOpen, onClose, onAddItem, onUpdateItem, item }) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (item) {
      setName(item.name);
      setWeight(item.weight);
      setPrice(item.price);
    }
  }, [item]);

  if (!isOpen) return null;

  const handleSave = () => {
    const newItem = {
      id: item ? item.id : Date.now(), // If editing, keep the same ID, else generate a new one
      name,
      weight,
      price,
      date: new Date().toLocaleDateString(),
    };

    if (item) {
      onUpdateItem(newItem); // If item exists, update it
    } else {
      onAddItem(newItem); // Else, create a new item
    }
    onClose();
  };

  return (
    <>
    <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2>{item ? "Edit Item" : "Add New Item"}</h2>
        <label>
          Item Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
          />
        </label>
        <label>
          Weight:
          <select value={weight} onChange={(e) => setWeight(e.target.value)}>
            <option value="">Select weight</option>
            <option value="500g">500g</option>
            <option value="1kg">1kg</option>
            <option value="5kg">5kg</option>
          </select>
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </label>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            {item ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItemModal;
