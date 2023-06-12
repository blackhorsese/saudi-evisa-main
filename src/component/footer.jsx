import React from "react";
import Flogo from "../asset/MT-Logo.svg";
import Vector from "../asset/Vector.svg";
import Vector2 from "../asset/Vector2.svg";
import Vector3 from "../asset/Vector3.svg";
import Vector4 from "../asset/Vector4.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleButtonClick = () => {
    window.open(
      "https://help.visitsaudi.com/?_ga=2.110485383.325474545.1679289825-2067208994.1678883007"
    );
  };

  return (
    <React.Fragment>
      <div className="bg-grey py-5 ">
        <div className="grid grid-cols-1  md:grid-cols-3 py-5 border-b-[1px] border-gray-800    w-[95%] mx-auto">
          <div className="col-span-2  flex justify-around self-center ">
            <p
              onClick={() => handleNavigate("/terms")}
              className="text-[10px] md:text-[15px]   font-medium text-white underline cursor-pointer "
            >
              Terms and conditions
            </p>

            <p
              onClick={() => handleNavigate("/privact-policy")}
              className="text-[10px] md:text-[15px]    font-medium text-white underline  cursor-pointer"
            >
              Privacy policy
            </p>

            <p
              onClick={handleButtonClick}
              className="text-[10px] md:text-[15px]    font-medium text-white underline cursor-pointer"
            >
              Contact us
            </p>

            <p
              onClick={() => handleNavigate("/info")}
              className="text-[10px] md:text-[15px]   font-medium text-white underline cursor-pointer"
            >
              Important info
            </p>
          </div>

          <div className="col-span-1">
            <img className="w-[60%] mx-auto" src={Flogo} />

            <p className="text-[13px] font-medium text-white text-center">
              The official tourism website of Saudi Arabia
            </p>
          </div>
        </div>

        <div className="flex  justify-between w-[40%] md:w-[20%] mx-auto pt-10">
          <a href="https://www.youtube.com/visitsaudi" target="_blank">
            <img className="w-[20px] cursor-pointer" src={Vector} />
          </a>
          <a href="https://www.instagram.com/visitsaudi/" target="_blank">
            <img className="w-[20px] cursor-pointer" src={Vector2} />
          </a>
          <a href="https://www.facebook.com/VisitSaudi/" target="_blank">
            <img className="w-[20px] cursor-pointer" src={Vector3} />
          </a>
          <a href="https://twitter.com/VisitSaudiNow" target="_blank">
            <img className="w-[20px] cursor-pointer" src={Vector4} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
