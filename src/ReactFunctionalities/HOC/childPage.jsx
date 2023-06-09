import React from "react";

export default function childPage() {
  return (
    <div>
      <h4> Child Page</h4>
    </div>
  );
}

const hocComp = (Comp) => {
  return () => {
    <div>
      <h2>HOC</h2>
      <Comp />
    </div>;
  };
};

const finalComp = hocComp(childPage);

export { finalComp };
