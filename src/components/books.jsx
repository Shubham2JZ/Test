import React from "react";
import BookCard from "./bookCard";

const Books = ({ list, handleDelete }) => {
  return (
    <div
      style={{ padding: "20px", borderStyle: "solid", borderRadius: "10px" }}
      className="m-2"
    >
      <div>
        <h1>Reading List</h1>
      </div>
      <div>
        {list.map((n, i) => (
          <BookCard value={n} key={i} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Books;
