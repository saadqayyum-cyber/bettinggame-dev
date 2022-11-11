// import Image from "next/image";
import React, { useState } from "react";
import * as moment from "moment";

const Winteams = ({ product }) => {
  const winteam = product.winTeamName;
  return (
    <div className="flex mb-2 justify-center shadow-lg items-center tabwidth md:w-[80%] flex-col md:flex-row mx-auto overflow-hidden border rounded-[20px]">
      <div className="flex-1 p-4">
        <h1 className="max-w-2xl mb-4  font-extrabold text-gray-800 leading-none tracking-tight tabtext  md:text-5xl xl:text-3xl dark:text-white">
          {product.name}
        </h1>
        <p>
          Date:
          <span className="text-blue-500">
            {moment(product.matchDate).format("ll")}
          </span>
        </p>
      </div>
      <div>
        <input
          type="radio"
          id={product.teamName1}
          name={product.slug}
          value={product.teamName1}
          className="hidden peer"
          checked={winteam === product.teamName1}
        />
        <label
          htmlFor={product.teamName1}
          className="inline-flex w-[200px] h-[200px]  justify-center 
          bg-orange-50 items-center p-3  text-gray-500
            rounded-lg border border-gray-200
             cursor-pointer dark:hover:text-gray-300
              dark:border-gray-700 dark:peer-checked:text-green-500
               peer-checked:border-green-600 peer-checked:text-green-600
                hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400
                 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={product.team1Image}
              alt={product.team1Image}
              width={100}
              height={100}
            />
            <div className="w-full">{product.teamName1}</div>
          </div>
        </label>
      </div>
      <div className="text-6xl p-3">vs</div>
      <div>
        <input
          type="radio"
          id={product.teamName2}
          name={product.slug}
          value={product.teamName2}
          className="hidden peer"
          checked={winteam === product.teamName2}
        />
        <label
          htmlFor={product.teamName2}
          className="inline-flex w-[200px] h-[200px] 
          justify-center bg-orange-50 items-center p-3
            text-gray-500  rounded-lg border
             border-gray-200 cursor-pointer
              dark:hover:text-gray-300
               dark:border-gray-700
                dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={product.team2Image}
              alt={product.team2Image}
              width={100}
              height={100}
            />
            <div className="w-full">{product.teamName2}</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Winteams;
