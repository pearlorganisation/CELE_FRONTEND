import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import { getAllServices } from "../features/actions/servicesAction";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { services } = useSelector((state) => state.services);

  console.log(services, "my services data");

  useEffect(() => {
    dispatch(getAllServices({ page: 1 }));
  }, []);
  return (
    <div>
      <HeroSection
        title="Services Overview"
        image="https://kaashimukthi.com/wp-content/uploads/2023/07/Funeral-service-03.jpg"
        subtitle=""
      />

      <div className="flex items-center justify-center flex-col gap-3 mt-12">
        <h1 className="mt-6 font-bold text-6xl text-green-800">
          {" "}
          Services We Provide{" "}
        </h1>

        <p className="px-20 mt-6 font-semibold text-xl text-black/80 text-center">
          <span className="text-green-800">CELE</span>, LLC offers distinctive,
          personal, and affordable services designed to help you honor your
          loved one in a way that is unique to them and meaningful to you.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 px-10">
        {Array.isArray(services) &&
          services.slice(0, 3).map((service) => (
            <div
              key={service._id}
              onClick={() => navigate(`/services/${service._id}`)}
              className="relative hover:cursor-pointer group"
            >
              <img
                src={service?.banner?.secure_url}
                className="h-full w-full object-cover transition-transform duration-300"
                alt={service?.name}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
              <h1 className="absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-3xl text-center text-white font-bold z-10">
                {service?.name}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
