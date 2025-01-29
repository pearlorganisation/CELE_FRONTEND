import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getObituariesById } from "../features/actions/obituaryActions";
import moment from "moment";
import Galleryslider from "../components/slider/slider";
import Guestbook from "./guestbook";


const ObituariesDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getObituariesById(id));
  }, []);

  const { obituary } = useSelector((state) => state.obituaries);
  console.log("obit",obituary)

  console.log(obituary, "obituary");
  return (
    <div>
      <div className="relative mb-40">
        <div
          className="w-full h-80 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${obituary?.banner?.secure_url})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src={
              obituary?.image?.secure_url ||
              "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            }
            className="h-72 w-56 absolute bottom-[-35%] left-1/4 transform -translate-x-1/2 rounded-md"
          />

          <div className="flex flex-row gap-4 absolute  bottom-[-45%] left-1/2 transform -translate-x-1/4 -translate-y-1/2">
            <div className="flex flex-row gap-4">
              <button className="px-4 py-4 bg-yellow-600 rounded-md flex flex-row gap-4 text-white text-xl">
                <img
                  src="https://manage2.tukioswebsites.com/images/flower-cta.svg"
                  className="h-8 w-8"
                />
                Send Flowers{" "}
              </button>
            </div>

            <div className="flex flex-row gap-4">
              <button className="px-4 py-4 bg-green-600 rounded-md flex flex-row gap-4 text-white text-xl">
                <img
                  src="https://manage2.tukioswebsites.com/images/tree-cta.svg"
                  className="h-8 w-8"
                />
                Plant a Tree{" "}
              </button>
            </div>

            <div className="flex flex-row ">
              <button className="px-4 py-4 bg-blue-600 rounded-md flex flex-row gap-4 text-white text-xl">
                <img
                  src="https://manage2.tukioswebsites.com/images/card-cta.svg"
                  className="h-8 w-8"
                />
                Send a Card{" "}
              </button>
            </div>
          </div>

          <div className="relative z-10 flex  w-full h-full text-center text-white">
            <div>
              <div className="flex flex-row gap-16 mx-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-sm font-bold mb-4 mt-20">
                  {moment(obituary?.birthYear).format("YYYY")}
                </h1>
                <hr className="w-[20%] left-12 h-2 bg-white relative" />
                <h1 className="text-6xl font-bold mb-4">{obituary?.name} </h1>

                <hr className="w-[20%] relative left-60 h-2 bg-white" />
                <h1 className="text-sm font-bold mb-4 mt-20">
                  {moment(obituary?.deathYear).format("YYYY")}
                </h1>
              </div>

              <img
                src="https://www.celebratelife.co.ke/assets/images/logo/logo-white-two.png"
                className="w-20 h-20 absolute top-8 left-64"
              />

              <h1 className="absolute top-12 left-[360px] text-2xl font-bold">
                CELE
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24">
        <h1 className="text-4xl font-bold">{obituary?.name}</h1>
        <h1 className="text-2xl from-neutral-600 mt-4">
          {moment(obituary?.birthYear).format("MMM DD, YYYY")} —{" "}
          {moment(obituary?.deathYear).format("MMM DD, YYYY")}
        </h1>

        <h1 className="text-2xl from-neutral-200 to-slate-500 mt-4">
          {obituary?.location}
        </h1>

        <p className="text-base mt-4 w-[80%]">{obituary?.description} </p>
      </div>

      {/* </> */}
      {obituary?.guestBooks.name}
  
      {/* {obituary?.photoGallery?.images?.map(pic=> (<img src={pic?.secure_url} className="h-20 w-20"/>))} */}

      <Galleryslider pics= {obituary?.photoGallery   }/>
      <Guestbook data={obituary?.guestBooks}/>
  
    </div>
  );
};

export default ObituariesDetails;
