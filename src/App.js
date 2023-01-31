import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Books from "./components/books";
import Input from "./components/entry";

function App() {
  const [list, setList] = useState([]);
  const [input, setinput] = useState("");

  const inputRef = useRef(null);
  const editRef = useRef(null);

  // FUNCTIONS
  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const handleEdit = (i, e) => {
    let arr = [...list];
    arr[i] = { value: editRef.current.value, editMode: false };
    setList(arr);
  };
  const handleEditMode = (i) => {
    let arr = [...list];
    arr[i].editMode = !arr[i].editMode;
    setList(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [...list];

    arr.push({ value: inputRef.current.value, editMode: false });
    setList(arr);
  };
  const handleDelete = (i) => {
    let arr = [...list];
    setList(arr.filter((n) => n !== list[i]));
  };

  useEffect(() => {
    inputRef.current.value = "";
  });

  return (
    <div className="container" style={{ width: "900px" }}>
      <Books
        list={list}
        handleDelete={(e) => handleDelete(e)}
        handleChange={(e) => handleEdit(e)}
        handleEditMode={(e) => handleEditMode(e)}
        editRef={editRef}
      />
      <Input
        handleInput={(e) => handleInput(e)}
        refer={inputRef}
        handleSubmit={(e) => handleSubmit(e)}
        value={input}
      />
    </div>
  );
}

export default App;
