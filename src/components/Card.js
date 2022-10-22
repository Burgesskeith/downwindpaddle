import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="border border-slate-300 rounded-lg shadow-lg p-4 m-2 w-160">
        {children}
      </div>
    </>
  );
};

export default Card;
