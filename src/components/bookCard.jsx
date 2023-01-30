import React from "react";

const BookCard = ({ value, handleDelete }) => {
  return (
    <div
      className="col-sm m-2"
      style={{
        height: "150px",
        borderStyle: "solid",
        borderRadius: "10px",
      }}
    >
      <h3 className="fw-bold text-uppercase fst-italic m-2">{value}</h3>
      <div>
        <button className="btn btn-warning btn-sm m-2 ">Edit</button>
        <button className="btn btn-danger btn-sm m-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
