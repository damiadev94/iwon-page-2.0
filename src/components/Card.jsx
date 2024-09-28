import React from "react";

function Card({ title, features, oldPrice, actualPrice }) {
  return (
    <div className="bg-gray-200 py-4 px-2">
      <h3 className="font-bold 2xl text-center">{title}</h3>
      <p>
        {features.forEach((element) => {
          return element + "\n";
        })}
      </p>
      <span className="line-through block">{oldPrice}</span>
      <span className="block">{actualPrice}</span>
    </div>
  );
}

export default Card;
