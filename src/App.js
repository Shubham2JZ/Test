import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Books from "./components/books";
import Input from "./components/entry";

function App() {
  const [list, setList] = useState([]);
  const [input, setinput] = useState("");

  const inputRef = useRef(null);

  // FUNCTIONS
  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [...list];
    arr.push(inputRef.current.value);
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
      <Books list={list} handleDelete={(e) => handleDelete(e)} />
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
