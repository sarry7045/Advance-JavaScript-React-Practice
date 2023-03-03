import React, { useEffect, useState } from "react";

const InputTag = ({ addCards, editVideo, handleUpdate, dispatch }) => {
  // Fill the input's and add cards functionality
  const [cards, setCards] = useState({
    title: "",
    discription: "",
    buttonText: "",
  });

  function handleChange(e) {
    console.log({ [e.target.name]: e.target.value });
    setCards({ ...cards, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCards({
      title: "",
      discription: "",
      buttonText: "",
    });
    if (editVideo) {
      // Because useReducer comes in picture
      // handleUpdate(cards);

      // useReducer Part
      dispatch({ type: "UpdateCard", payload: cards });
    } else {
      // Because useReducer comes in picture
      // addCards(cards);

      // useReducer Part
      dispatch({ type: "AddCard", payload: cards });
    }
    console.log("cards", cards);
  }

  useEffect(() => {
    if (editVideo) {
      setCards(editVideo);
    }
  }, [editVideo]);
  return (
    <div>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            type="text"
            className="form-control"
            placeholder="Title"
            value={cards.title}
          />
        </div>
        <div className="form-group my-4">
          <input
            onChange={handleChange}
            name="discription"
            type="text"
            className="form-control"
            placeholder="Description"
            value={cards.discription}
          />
        </div>

        <div className="form-group my-4">
          <input
            onChange={handleChange}
            name="buttonText"
            type="text"
            className="form-control"
            placeholder="Button Text"
            value={cards.buttonText}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          {editVideo ? "Edit" : "Add"} Dynamic Cards
        </button>
      </form>
    </div>
  );
};

export default InputTag;
