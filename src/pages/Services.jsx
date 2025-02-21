import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import { getAllServices } from "../features/actions/servicesAction";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import NeedServices from "../components/NeedServices/NeedServices";

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

      <div className="grid border  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {Array.isArray(services) &&
          services
            .slice(0, 8)
            .map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
      </div>

      <NeedServices />
    </div>
  );
};

export default Services;
