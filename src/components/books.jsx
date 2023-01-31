import React from "react";
import BookCard from "./bookCard";

const Books = ({
  list,
  handleDelete,
  handleChange,
  handleEditMode,
  editRef,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        borderStyle: "solid",
        borderRadius: "10px",
        borderWidth: "thin",
      }}
      className="m-2"
    >
      <div>
        <h1>Reading List</h1>
      </div>
      <div>
        {list.map((n, i) => (
          <BookCard
            book={n}
            key={i}
            handleDelete={() => handleDelete(i)}
            handleChange={(e) => handleChange(i, e)}
            editRef={editRef}
            handleEditMode={() => handleEditMode(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
