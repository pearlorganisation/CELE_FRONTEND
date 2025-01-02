/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const ObituaryCard = ({ name, description, date, image, id, banner }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-5 px-12">
      <div className="flex flex-row gap-4 py-6 border border-gray-600 rounded-lg">
        <div className="w-1/4">
          <img
            src={image?.secure_url}
            className="w-full h-64 object-contain object-center"
          />
        </div>
        <div className="w-3/4">
          <h1 className="text-2xl font-bold text-green-800">{name}</h1>
          <p className="text-gray-600 mt-3">
            {moment(date).format("DD MMM YYYY")}
          </p>
          <p className="text-gray-600 mt-3 w-[80%]">
            {description.substring(0, 240)} ...
          </p>

          <div className="flex flex-row gap-2 mt-4">
            <button
              onClick={() => navigate(`/obituaries/${id}`)}
              className="px-4 py-2 border border-green-800 rounded-full text-green-800 hover:cursor-pointer hover:bg-green-800 hover:text-white"
            >
              Visit Obituary
            </button>
            <button className="px-4 py-2 border border-green-800 rounded-full text-green-800 hover:cursor-pointer hover:bg-green-800 hover:text-white">
              Send Flowers
            </button>

            <button className="px-4 py-2 border border-green-800 rounded-full text-green-800 hover:cursor-pointer hover:bg-green-800 hover:text-white">
              Send Trees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObituaryCard;
