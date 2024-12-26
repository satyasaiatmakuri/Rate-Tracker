import React, { useState, useEffect } from "react";
import "./ItemList.css";

const ItemList = ({ items, onEditItem }) => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setIsLoading(true);
      const result = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(result);
      setIsLoading(false);
    }, 300); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [search, items]);

  return (
    <div className="item-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <div className="ListingSectionRoot">
            {filteredItems.map((item) => (
              <div key={item.id} className="itemRoot">
                <div className="itemTopRoot">
                  <td className="itemName">{item.name}</td>
                  <div className="itemSpecs">
                    <td className="itemPrice">{item.price}₹</td>&nbsp;/&nbsp;
                    <td className="itemWeight">{item.weight}</td>
                  </div>
                </div>
                <div className="itemBottomRoot">
                  <td className="itemDate">updated on : {item.date}</td>
                  <td className="itemActions">
                    <button onClick={() => onEditItem(item)}>Edit</button>{" "}
                    {/* Edit button */}
                  </td>
                </div>
              </div>
            ))}
          </div>
          {/* <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Date Updated</th>
                <th>Price</th>
                <th>Weight</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.price}</td>
                  <td>{item.weight}</td>
                  <td>
                    <button onClick={() => onEditItem(item)}>Edit</button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </>
      )}
    </div>
  );
};

export default ItemList;
