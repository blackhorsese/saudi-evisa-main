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

        <div className=" grid grid-cols-1 ml-10 lg:ml-20  py-20 lg:py-40  hidden md:block">
          <div>
            <p className="text-[90px] 2/3 lg:w-1/2 font-medium font-displace text-white leading-[1]">
              Welcome to the Saudi eVisa Portal
            </p>

            <p className="text-[20px] w-4/5 mt-10 font-medium text-white ">
              Planning a trip to Saudi Arabia? Get your visa now, it only takes
              3 simple steps…
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3  xl:grid-cols-4 py-10 w-full lg:w-[90%] mx-auto bg-white shadow-lg  mt-0 md:-mt-10 lg:-mt-20 mb-10">
        <div className="flex justify-center ">
          <h6 className="text-[2.4rem] text-secondary font-normal font-displace ">
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
            className="hvr-bounce-to-top text-secondary text-[20px] border-4 border-secondary w-2/3 flex  md:w-4/5 p-4 rounded-full mx-auto block mt-10 xl:mt-0 "
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
