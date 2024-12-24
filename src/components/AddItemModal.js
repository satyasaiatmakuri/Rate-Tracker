import React, { useState } from "react";
import "./AddItemModal.css";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    const newItem = {
      id: Date.now(),
      name,
      weight,
      price,
      date: new Date().toLocaleDateString(),
    };
    onAddItem(newItem);
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2>Add New Item</h2>
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
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItemModal;
