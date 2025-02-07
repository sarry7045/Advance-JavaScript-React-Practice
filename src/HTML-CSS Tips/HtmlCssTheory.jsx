import React from "react";

const HtmlCssTheory = () => {
  //     <html>
  // <head>
  //   <style>
  //     #demo {color: blue;}
  //     .test {color: green;}
  //     p {color: red;}
  //   </style>
  // </head
  // <body>
  // <p id="demo" class="test" style="color: pink;">Hello World!</p >
  // </body>
  // </html>
  // In this case the highest priority is inline style , then ID then className then direct tag name

  // Inline ,Inline Block, Block
    //Inline - <img>
    //Inline-Block - <input>
    //Block - <div>

    // Difference between Grid and Flex
    // Grid - Grid layout is a two - dimensional system that allows you to create rows and columns.
    // Flex - Flex layout is a one - dimensional system that allows you to create one at the time.
  
  
  
// Mixin in Scss = for mixin technique we have to create file like this (_mixins) , suppose we have to create one style for any div and wo div ka style hume multipe jagah par 
// use krna hai so, hum usse mixin ki madat se bana k , then variable ko import kara k direct use kar sakte hai
// // Define a mixin
// @mixin box-shadow($color, $blur) {
// box-shadow: 0 0 $blur $color;
// }

// Use the mixin
// .my-element {
// @include box-shadow(red, 5px);
// }

// Extend in scss -
// Define a base selector with common styles
// .base-selector {
// color: red;
// font-size: 16px;
// }

// Use @extend to inherit the styles of the base selector
// .extended-selector {
// @extend .base-selector;
// font-weight: bold;
// }

  const data = "<h1 style='color:blue'>Hiiii</h1>";
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </>
  );
};

export default HtmlCssTheory;