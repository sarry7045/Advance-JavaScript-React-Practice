import React, { useState } from "react";
import Cards from "./Cards";
import InputTag from "./InputTag";
import Button from "./Button";

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
  const [cards, setCards] = useState(obj);
  const [editVideo, setEditVideo] = useState(null);

  function addCards(card) {
    setCards([
      ...cards,
      {
        ...card,
        id: cards.length + 1,
      },
    ]);
  }

  function handleDelete(id) {
    setCards(cards.filter((card) => card.id !== id));

    console.log(id);
  }

  function handleEdit(id) {
    setEditVideo(cards.find((card) => card.id === id));
  }

  function handleUpdate(cardInfo) {
    const index = cards.findIndex((item) => item.id === cardInfo.id);
    const newCard = [...cards];
    newCard.splice(index, 1, cardInfo);
    setCards(newCard);
    console.log("newCardInfo", newCard);
  }

  return (
    <div className="container" onClick={() => console.log("App is Running")}>
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
                handleDelete={handleDelete}
                handleEdit={handleEdit}
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

      <button onClick={() => setCards([])} className="btn btn-primary">
        Clear All Cards
      </button>
      <button
        onClick={() =>
          setCards([
            ...cards,
            {
              id: cards.length + 1,
              title: "NextJs",
              discription:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
              buttonText: "NextJS",
            },
          ])
        }
        className="btn btn-primary mx-4"
      >
        Add Cards
      </button>
      <div className="my-4">
        {" "}
        <InputTag
          handleUpdate={handleUpdate}
          editVideo={editVideo}
          addCards={addCards}
        />
      </div>
    </div>
  );
};

export default CoderDostTask;
