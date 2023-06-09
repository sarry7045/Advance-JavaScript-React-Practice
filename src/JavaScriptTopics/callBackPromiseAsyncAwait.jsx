import React from "react";

const callBackPromiseAsyncAwait = () => {
  // default Scnario
  // Its not printing the creatData functions values because it will take 1 sec extra time, tab tak pehla wala function call ho jata hai
  const datas = [
    {
      name: "Suraj",
      location: "Mumbai",
    },
    {
      name: "Neeraj",
      location: "UP",
    },
  ];
  function getdata() {
    setTimeout(() => {
      datas.forEach((data, index) => {
        console.log(data.name);
      });
    }, 1000);
  }
  function creatData(newData) {
    setTimeout(() => {
      datas.push(newData);
    }, 2000);
  }

  creatData({ name: "ALli", location: "<P" });
  getdata();

  // Solution using callBack function

  const datass = [
    {
      name: "Lokesh",
      location: "Virart",
    },
    {
      name: "Mahesh",
      location: "Kol",
    },
  ];
  function getdataa() {
    setTimeout(() => {
      datass.forEach((data, index) => {
        console.log(data.name);
      });
    }, 1000);
  }
  function creatDataa(newData, callBack) {
    setTimeout(() => {
      datass.push(newData);
      callBack();
    }, 2000);
  }

  creatDataa({ name: "Deepak", location: "Pune" }, getdataa);
  getdataa();

  // Solution using Promise function

  const datasss = [
    {
      name: "Bhoir",
      location: "Nalaa",
    },
    {
      name: "Pradeep",
      location: "Marol",
    },
  ];
  function getdataaa() {
    setTimeout(() => {
      datasss.forEach((data, index) => {
        console.log(data.name);
      });
    }, 1000);
  }

  function creatDataaa(newData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        datasss.push(newData);
        let error = false;
        if (!error) {
          resolve();
        } else {
          reject("Error");
        }
      }, 2000);
    });
  }

  creatDataaa({ name: "Sandeep", location: "JOhgesj=" })
    .then(getdataaa)
    .catch((err) => console.log(err));

  // Solution using Async Await function

  async function start() {
    await creatData({ name: "Kallu", location: "Andheri" });
    getdata();
  }
  start();

  return <div></div>;
};

export default callBackPromiseAsyncAwait;
