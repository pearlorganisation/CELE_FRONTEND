/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${service._id}`)}
      className="relative h-80 hover:cursor-pointer group mt-8 mb-8 rounded-md"
    >
      <img
        src={service?.banner?.secure_url}
        className="h-full w-full object-cover  transition-transform duration-300 rounded-md"
        alt={service?.name}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
      <h1 className="absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-3xl text-center text-white font-bold z-10">
        {service?.name}
      </h1>
    </div>
  );
};

export default ServiceCard;
