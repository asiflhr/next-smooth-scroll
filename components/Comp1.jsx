import React from "react";

const Comp1 = ({ bgColor, ID }) => {
  const random = () => Math.floor(Math.random() * 50);
  const randomMT = () => Math.floor(Math.random() * 30);

  return (
    <div
      className={`flex items-center justify-center h-screen w-full ${bgColor}`}
    >
      <h2
        className="text-slate-100 text-2xl font-bold"
        style={{ marginLeft: `${random()}rem`, marginTop: `${randomMT()}rem` }}
      >
        Component: {ID}
      </h2>
    </div>
  );
};

export default Comp1;
