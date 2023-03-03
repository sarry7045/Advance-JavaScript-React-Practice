import React, { useState } from "react";

const Button = ({ onPlay, onPause }) => {
  // Button Play and pause functionality with dynamiuc Icon
  const [isPlaying, setisPlaying] = useState(true);
  function handleClick(e) {
    e.stopPropagation();
    isPlaying ? onPlay() : onPause();

    setisPlaying(!isPlaying);
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        {isPlaying ? "Play >" : "Pause ||"}
      </button>
    </div>
  );
};

export default Button;
