import React from "react";

const Comp1 = ({ bgColor, ID }) => {
  return (
    <div
      className={`flex items-center justify-center h-screen w-full text-slate-100 text-7xl font-semibold ${bgColor}`}
    >
      Component: {ID}
    </div>
  );
};

export default Comp1;
