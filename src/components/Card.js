import React from "react";

const Card = ({ children, bgColor }) => {
  return (
    <>
      <div
        className={`border border-slate-300 rounded-lg shadow-lg p-4 m-2 w-[280px] bg-${bgColor}-200`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
