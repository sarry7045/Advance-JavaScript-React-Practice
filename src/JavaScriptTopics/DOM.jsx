import React from "react";

const DOM = () => {
  let content = document.querySelector(".content"); //for Single Capturing
  let content1 = document.querySelectorAll(".content1"); // for multiple Capturing

  // content.innerHTML - use for All Content inside that className or ID
  // content.innerText - Only fot text

  // 1

  let eventElement = document.querySelector(".clickMe");
  let ul = document.querySelector("ul");

  eventElement.addEventListener("click", function () {
    //Adding for elements
    let li = document.createElement("li");
    li.textContent = "Something new Added";
    ul.append(li);
    console.log("Clicked Me");
  });

  let elements = document.querySelectorAll("li");

  elements.forEach(function (element) {
    element.addEventListener("click", function (e) {
      console.log("Item Clicked", e);
      // for removeing elements
      // e.target.remove()
    });
  });

  // 2

  const form = document.querySelector(".singUp-form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("valuess", email.value, password.value);
    // or we can directly access using name
    console.log("valuesss", e.name.email, e.name.password);
  });

  return (
    <>
      {/* 1 */}
      <div>
        <ul>
          <li>Eat</li>
          <li>Sleep</li>
          <li>Code</li>
          <li>Repeat</li>
        </ul>
        <button className="clickMe">Click Me</button>
      </div>
      {/* 2 */}
      <div>
        <form action="" className="singUp-form">
          <input type="email" name="userEmail" id="email" />
          <input type="password" name="password" id="password" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default DOM;
