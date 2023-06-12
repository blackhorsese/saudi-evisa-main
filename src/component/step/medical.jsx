import React from "react";
import Navbar from "../navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";
import Steppers from "../stepper";

import Company from "../../asset/der3.png";
import Company2 from "../../asset/walaa.png";
import Company3 from "../../asset/tawuniya.png";
import Company4 from "../../asset/bupa.png";
import Company5 from "../../asset/medgulf.jpg";
import Company6 from "../../asset/gulfunion.png";
import Company7 from "../../asset/Al-Sagr.jpg";
import Company8 from "../../asset/Al-Etihad.jpg";
import Company9 from "../../asset/Solidarity.jpg";
import Company10 from "../../asset/Arabia.jpg";
import Company11 from "../../asset/GIG.jpg";
import Company12 from "../../asset/Allianz_logo.jpg";
import Company13 from "../../asset/Malath_logo.jpg";
import Company14 from "../../asset/Alinman_logo.jpg";
import Company15 from "../../asset/Rajhi_logo.jpg";
import Company16 from "../../asset/Saico_logo.jpg";

const companys = [
  {
    img: Company,
    text: "Arabian Shield cooperative Insurance Company",
  },
  {
    img: Company2,
    text: "Saudi United Cooperative Insurance (WALA'A)    ",
  },
  {
    img: Company3,
    text: "Tawuniya cooperative Insurance Company    ",
  },
  {
    img: Company4,
    text: "BUPA Arabia for Cooperative Insurance    ",
  },
  {
    img: Company5,
    text: "MedGulf Company    ",
  },
  {
    img: Company6,
    text: "Gulf Union Cooperative Insurance Company    ",
  },
  {
    img: Company7,
    text: "Al Sagr Co-operative Insurance Company    ",
  },
  {
    img: Company8,
    text: "Al-Etihad Co-operative Insurance Company    ",
  },
  {
    img: Company9,
    text: "Solidarity Saudi Takaful Company    ",
  },
  {
    img: Company10,
    text: "Arabia Insurance Cooperative Company    ",
  },
  {
    img: Company11,
    text: "Gulf Insurance Group (GIG)    ",
  },
  {
    img: Company12,
    text: "Allianz Saudi Fransi Cooperative Insurance Company    ",
  },
  {
    img: Company13,
    text: "Malath Cooperative Insurance & Reinsurance Company    ",
  },
  {
    img: Company14,
    text: "Alinma Tokio Marine    ",
  },
  {
    img: Company15,
    text: "Alrajhi Takaful for Cooperative Insurance    ",
  },
  {
    img: Company16,
    text: "Saudi Arabian cooperative Insurance Company (Saico)    ",
  },
];

function Medical() {
  const location = useLocation();
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  // stepper

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3 ">
        <div
          className=" -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[30%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>

        <div className="mt-10 md:mt-0  md:col-span-2 md:ml-[300px]  lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto  w-[90%] ">
          <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
            Application No.: 230328006206727
          </p>

          <p className="font-medium text-[18px] mt-3">
            Medical insurance covers only emergency cases All of the companies
            are approved and certified in Saudi Arabia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {companys.map((x) => (
              <div className="shadow-xl p-4">
                <img src={x.img} />
                <p className="font-medium text-[18px] my-3 text-center ">
                  {x.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex mt-20">
            <input type="checkbox" id="myCheckboxs" />
            <p className="-mt-2 ml-2">
              {" "}
              BY CHECKING THIS BOX I AGREE TO THE INSURANCE COVERAGE LISTED
              ABOVE WITH A FEE OF (180.00 SAR)
            </p>
          </div>

          <div className="flex justify-center my-20 ">
            <p
              onClick={() => handleNavigate("/passport")}
              className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center"
            >
              PREVIOUS
            </p>
            <button
              onClick={() => handleNavigate("/termss")}
              className="ml-5 text-secondary text-[17px] border-4 border-secondary w-[30%] p-3 rounded-full  block h-[60px]  self-end"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Medical;
