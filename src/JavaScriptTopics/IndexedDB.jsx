import React, { useEffect } from "react";

const IndexedDB = () => {
  //   let db;
  //   let openRequest = indexedDB.open("myDatabase");

  //   openRequest.addEventListener("success", (e) => {
  //     console.log("DB Succcess");
  //     db = openRequest.result;
  //   });
  //   openRequest.addEventListener("error", (e) => {
  //     console.log("DB Error");
  //   });
  //   openRequest.addEventListener("upgradeneeded", (e) => {
  //     console.log("DB Upgraded");
  //     db = openRequest.result;
  //   });
    
    
    // IndexedDB is the one type of database like MongoDB but only for session storage
    // LocalStorage stored around 5mb but indexedDB stored around 300MB

  const db =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

  const createCollectionIndexDB = () => {
    if (!db) {
      console.log("This browser doen't Supported IndexDB");
      return;
    }
    console.log(db);
    const request = db.open("Test-DB", 2);
    request.onerror = () => {
      console.log("Error Case");
    };
    request.onupgradeneeded = (event) => {
      const dbb = request.result;
      if (!dbb.objectStoreNames.contains("userData")) {
        dbb.createObjectStore("userData", {
          keyPath: "id",
        });
      }
    };
    request.onsuccess = () => {
      console.log("Databae Opended Succesfuly");
    };
  };

  useEffect(() => {
    createCollectionIndexDB();
  });
  return (
    <div>
      <h4>IndexedDB</h4>
    </div>
  );
};

export default IndexedDB;
