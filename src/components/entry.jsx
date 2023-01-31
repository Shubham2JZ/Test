import React from "react";

const Input = ({ refer, handleSubmit, handleInput, value }) => {
  return (
    <div
      style={{
        borderStyle: "solid",
        padding: "20px",
        borderRadius: "10px",
        borderWidth: "thin",
      }}
      className="m-2"
    >
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">
          <h3>Title</h3>
        </label>
        <br />
        <input
          type="text"
          id="input"
          className="m-2"
          onChange={handleInput}
          ref={refer}
          value={value}
        />
        <button className="btn btn-primary m-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
