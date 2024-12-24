// src/utils/storage.js
export const getItems = () => {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
};

export const saveItems = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
