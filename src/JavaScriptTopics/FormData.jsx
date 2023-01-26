import React from "react";

const FormData = () => {
  // Using FormData we can post the input data in set of key/value pair to the server thru fetch API

//   const form = document.getElementById("form");
//   const formData = new FormData(form);

//   const output = document.getElementById("output");
//   for (const [key, value] of formData) {
//     output.textContent += `${key}: ${value}\n`;
//   }

  return (
    <div>
      <h4>Form Data</h4>

      <form id="form">
        <input type="text" name="text1" value="foo" />
        <input type="text" name="text2" value="bar" />
        <input type="text" name="text2" value="baz" />
        <input type="checkbox" name="check" checked disabled />
      </form>

      <output id="output"></output>
    </div>
  );
};

export default FormData;
