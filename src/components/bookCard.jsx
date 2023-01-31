import React from "react";

const BookCard = ({
  book,
  handleDelete,
  handleChange,
  editRef,
  handleEditMode,
}) => {
  return (
    <div
      className="btn btn-secondary m-2"
      style={{
        height: "150px",
        borderStyle: "solid",
        borderRadius: "10px",
        borderWidth: "thin",
        width: "31%",
      }}
    >
      {book.editMode ? (
        <div>
          <input
            type="text"
            className="m-2"
            ref={editRef}
            placeholder={book.value}
            style={{ width: "150px" }}
          />
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleChange}
          >
            Done
          </button>
        </div>
      ) : (
        <h3 className="fw-bold text-uppercase fst-italic m-2">{book.value}</h3>
      )}
      <div>
        <button
          className="btn btn-warning btn-sm m-2 "
          onClick={handleEditMode}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
