import React from "react";
const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/010/008/086/non_2x/background-dimension-3d-graphic-message-board-for-text-and-message-design-line-shadow-for-modern-web-design-free-vector.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-full h-96 justify-center items-center flex">
          <h1 className="text-4xl text-black font-bold">About us</h1>
        </div>
      </div>
      <div>
        <div className="flex flex-col mx-48 justify-center items-center mt-5 mb-3">
          <h1 className="text-3xl font-semibold pb-3 mt-6">
            We help you remember your loved ones
          </h1>
          <p className="w-[80%] text-wrap text-justify text-gray-700 mt-6">
            Announcing transition and putting up a permanent memorial of our
            loved ones is probably the best way to celebrate their lives.
            <br />
          </p>

          <h1>
            We help each of us give our story in a special way to our loved ones
            called by God
          </h1>

          <p>
            Celebrate Life is a record of dignity with a difference.... Fully
            Digitalized! This is a news platform that reports the recent
            transition/death of a person, typically along with an account of the
            person's life and information about the upcoming funeral. Announcing
            transition and putting up a permanent memorial of our loved ones is
            probably the best way to celebrate their lives. This value added
            website is a permanent way of sharing memories with family,
            relatives and friends from anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
