import React, { useEffect } from "react";

const HTMLCSSTips = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    goToTop();
  });
  return (
    <>
      {/* Suppose we need to disable Right click on some component or element */}
      {/* <div oncontextmenu="return false;"></div> */}

      <div>
        <video
          poster="https://images.pexels.com/photos/10908051/pexels-photo-10908051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="500"
          height="500"
          controls
        >
          <source
            src="https://www.youtube.com/watch?v=I1nX5EuvwzE"
            type="video/mp4"
          />
          Play
        </video>
      </div>

      <div>
        <picture>
          <img
            src="https://images.pexels.com/photos/10908051/pexels-photo-10908051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Imag"
            loading="lazy"
          />
          {/* Always use loading lazy for img tag for better performance */}
        </picture>
      </div>
    </>
  );
};

export default HTMLCSSTips;
