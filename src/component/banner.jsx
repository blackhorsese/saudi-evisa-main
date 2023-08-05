import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

export default function Banner({ color }) {
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <React.Fragment>
      <div className="bg ">
        <Navbar color={color} />

        <div className="py-20 lg:py-40 max-w-screen-2xl mx-auto justify-center overflow-hidden w-full md:px-20">
          <div>
            <p className="md:text-8xl text-5xl 2/3 lg:w-1/2 font-medium font-displace text-white leading-[1]">
              Welcome to the Saudi eVisa Portal
            </p>

            <p className="md:text-xl text-lg md:mt-10 mt-5 md:font-medium text-white ">
              Planning a trip to Saudi Arabia? Get your visa now, it only takes
              3 simple steps…
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex lg:flex justify-between py-10 px-10 md:-mt-20 w-full max-w-screen-xl mx-auto bg-white shadow-lg">
        <div className="flex justify-center ">
          <h6 className="text-[2.4rem] text-secondary font-normal font-displace">
            01 .
          </h6>
          <p className="text-[1.0rem] ml-5 self-center mt-3 lg:mt-4 xl:mt-0">
            Fill the application
          </p>
        </div>

        <div className="flex justify-center md:justify-start  ">
          <h6 className=" text-[2.4rem] text-secondary font-normal -ml-5  md:ml-0 lg:-ml-5 font-displace ">
            02 .
          </h6>
          <p className="text-[1.0rem] ml-5 self-center mt-3 lg:mt-4 xl:mt-0">
            Pay the Visa fee
          </p>
        </div>

        <div className="flex justify-center md:justify-start ">
          <h6 className="text-[2.4rem] text-secondary font-normal ml-3 md:ml-0 lg:-ml-28 font-displace ">
            03 .
          </h6>
          <p className="text-[1.0rem] ml-5 self-center mt-3  lg:mt-4 xl:mt-0">
            Get your online Visa
          </p>
        </div>

        <div>
          <button
            onClick={() => handleNavigate("/personal-info")}
            className="items-center justify-center border-4 text-secondary border-secondary rounded-full md:px-20 px-10 md:py-4 md:font-bold py-2 mx-auto ml-8 mt-8 md:mt-0 md:ml-0"
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
