import React from "react";

const SEO = () => {
  // Try to Don't use more then 200kb Image on Our Websites
  // For Icons ans Logos use SVG

  // use JSON.parse for any API Object for better performance  -   Because brower scan Parse data Easily

  // Title and Description on every Page usign Helmet.
  return (
    <div>
      <img
        src="images/originals/small.png"
        srcSet="images/originals/small.png 100w"
        alt="Ima"
        loading="lazy"
      />
      {/* Its define the size of image imideately = srcSet='images/originals/small.png 100w' */}

      <a href="/skills" title="Skills" target="_blank" rel="noreferrer">
        Skills
      </a>
      {/* Always us titile with a href tag */}
    </div>
  );
};

export default SEO;
