import React from "react";

const FileReader = () => {
  const input = document.getElementById("filee");

  if (input) {
    input.addEventListener("change", function (e) {
      console.log("inputFiles", input.files);
      const reader = new FileReader();
      reader.onload = function () {
        console.log("readerResult", reader.result);
        const lines = reader.result.split("\n").map(function (line) {
          return line.split(",");
        });
        console.log("Lines", lines);
      };
      reader.readAsText(input.files[0]);
      reader.readAsDataURL(input.files[0]);
    });
  }
  return (
    <div>
      <h4>FileReader</h4>
      <input id="filee" type="file" />
    </div>
  );
};

export default FileReader;
