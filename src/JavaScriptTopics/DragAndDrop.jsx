import React from "react";
import "../App.css";

const DragAndDrop = () => {
  const imgBoxs = document.querySelector(".imgBox");
  const whiteBoxs = document.getElementsByClassName("whiteBox");

  if (imgBoxs) {
    imgBoxs.addEventListener("dragstart", (e) => {
      console.log("Drag Start Trigged");
      e.target.className += " hold";
      setTimeout(() => {
        e.target.className = "hide";
      }, 0);
    });
    imgBoxs.addEventListener("dragend", (e) => {
      console.log("Drag Start End");
      e.target.className = "imgBox";
    });
  }

  for (const whiteBox of whiteBoxs) {
    whiteBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    whiteBox.addEventListener("dragenter", () => {});
    whiteBox.addEventListener("dragleave", () => {});
    whiteBox.addEventListener("drop", () => {});
  }

  return (
    <div>
      <h4>DragAndDrop</h4>
      <div className="whiteBox">
        <div className="imgBox" draggable="true"></div>
      </div>
      <div className="whiteBox"></div>
      <div className="whiteBox"></div>
      <div className="whiteBox"></div>
    </div>
  );
};

export default DragAndDrop;
