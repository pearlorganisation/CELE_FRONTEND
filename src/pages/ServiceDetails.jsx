import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getServiceById } from "../features/actions/servicesAction";
import HeroSection from "../components/HeroSection";
import NeedServices from "../components/NeedServices/NeedServices";

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { service } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServiceById(id));
  }, [id]);

  console.log(service, "service details");
  return (
    <div>
      <HeroSection title={service?.name} image={service?.banner?.secure_url} />

      <NeedServices />

      <div className="px-20">
        <h1 className="mt-6 mb-6 text-4xl font-semibold text-green-800">
          {service?.name} Services
        </h1>
        <p> {service?.serviceDescription}</p>

        {Array.isArray(service?.services) &&
          service?.services.map((serviceD, index) => (
            <div className="flex flex-row gap-4 mt-4" key={index}>
              <img
                src={serviceD.bannerService.secure_url}
                className="w-96 h-72"
              />

              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold text-green-800 mt-6">
                  {" "}
                  {serviceD.name}{" "}
                </h1>

                <h1> {serviceD.description} </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
