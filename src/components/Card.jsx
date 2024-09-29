import React from "react";

function Card({ title, features, oldPrice, actualPrice }) {
  return (
    <div className="bg-gray-200 py-4 px-2 flex flex-col justify-between">
      <h3 className="font-bold text-4xl text-center">{title}</h3>
      <p>
        {features.map((element) => {
          return <p className="text-center text-lg mb-2">{element}</p>;
        })}
      </p>
      <div>

      <span className="line-through block text-center text-lg">{oldPrice}</span>
      <span className="block text-center font-bold text-4xl">{actualPrice}</span>
      </div>
    </div>
  );
}

export default Card;
