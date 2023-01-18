import React, { useState, useRef } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "")
      return setData((prev) => {
        return [...prev, value];
      });
    inputRef.current.value = "";
  }

  return (
    <>
      Search:
      <input type="search" />
      <br />
      <br />
      New Item:
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" />
      </form>
      <button type="submit"> Add Item</button>
      <br />
      <br />
      Items:
      {data.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};

export default Search;
