import React, { useReducer, useState } from "react";
import Cards from "./Cards";
import InputTag from "./InputTag";
import Button from "./Button";
import CardContext from "./CardContext";
const obj = [
  {
    id: 1,
    title: "JavaScript",
    discription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "JavaScript",
  },
  {
    id: 2,
    title: "ReactJs",
    discription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "ReactJs",
  },
  {
    id: 3,
    title: "NextJs",
    discription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: "NextJS",
  },
];

const CoderDostTask = () => {
  // Because useReducer comes in picture
  // const [cards, setCards] = useState(obj);

  const [editVideo, setEditVideo] = useState(null);

  // useReducer Part
  function reducer(cards, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "AddCard":
        return [
          ...cards,
          {
            ...action.payload,
            id: cards.length + 1,
          },
        ];
      case "DeleteCard":
        return cards.filter((card) => card.id !== action.payload);

      case "UpdateCard":
        const index = cards.findIndex((item) => item.id === action.payload.id);
        const newCard = [...cards];
        newCard.splice(index, 1, action.payload);
        setEditVideo(null);
        return newCard;

      case "delcard":
        return [];

      case "Adcard":
        return [
          ...cards,
          {
            id: cards.length + 1,
            title: "NextJs",
            discription:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            buttonText: "NextJS",
          },
        ];

      default:
        return cards;
    }
  }

  // useReducer Part
  const [cards, dispatch] = useReducer(reducer, obj);

  // function addCards(card) {
  //   useReducer Part
  //   dispatch({ type: "AddCard", payload: card });

  //   Because useReducer comes in picture
  //   setCards([
  //     ...cards,
  //     {
  //       ...card,
  //       id: cards.length + 1,
  //     },
  //   ]);
  // }

  // function handleDelete(id) {
  //   useReducer Part
  //   dispatch({ type: "DeleteCard", payload: id });

  //   Because useReducer comes in picture
  //   setCards(cards.filter((card) => card.id !== id));

  //   console.log(id);
  // }

  function handleEdit(id) {
    setEditVideo(cards.find((card) => card.id === id));
  }

  // function handleUpdate(cardInfo) {
  //   useReducer Part
  //   dispatch({ type: "UpdateCard", payload: cardInfo });

  //   const index = cards.findIndex((item) => item.id === cardInfo.id);
  //   const newCard = [...cards];
  //   newCard.splice(index, 1, cardInfo);
  //   setEditVideo(null)

  //   Because useReducer comes in picture
  //   setCards(newCard);
  //   console.log("newCardInfo", newCard);
  // }

  return (
    <>
      <CardContext.Provider handleEdit={handleEdit} editVideo={editVideo}>
        <div
          className="container"
          onClick={() => console.log("App is Running")}
        >
          <div className="d-flex justify-content-center">
            {cards.map((curElem) => {
              const { title, discription, buttonText, id } = curElem;
              return (
                <>
                  <Cards
                    key={id}
                    title={title}
                    discription={discription}
                    buttonText={buttonText}
                    id={id}
                    // Because useReducer comes in picture
                    // handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    //   useReducer Part
                    dispatch={dispatch}
                  >
                    <Button
                      onPlay={() => console.log("Play Video", title)}
                      onPause={() => console.log("Pause Video", title)}
                    />
                  </Cards>
                </>
              );
            })}
          </div>

          <button
            onClick={() =>
              // Because useReducer comes in picture
              // setCards([])

              //   useReducer Part
              dispatch({ type: "delcard", payload: [] })
            }
            className="btn btn-primary"
          >
            Clear All Cards
          </button>
          <button
            onClick={() =>
              // Because useReducer comes in picture
              // setCards([
              //   ...cards,
              //   {
              //     id: cards.length + 1,
              //     title: "NextJs",
              //     discription:
              //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
              //     buttonText: "NextJS",
              //   },
              // ])

              //   useReducer Part
              dispatch({ type: "Adcard", payload: [] })
            }
            className="btn btn-primary mx-4"
          >
            Add Cards
          </button>
          <div className="my-4">
            {" "}
            <InputTag
              // Because useReducer comes in picture
              // handleUpdate={handleUpdate}
              // addCards={addCards}
              editVideo={editVideo}
              dispatch={dispatch}
            />
          </div>
        </div>
      </CardContext.Provider>
    </>
  );
};

export default CoderDostTask;
