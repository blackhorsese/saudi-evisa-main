import React from "react";
import Brun from "../asset/flag-brunei.png";
import China from "../asset/flag-china.png";
import Japan from "../asset/flag-japan.png";
import Singapore from "../asset/flag-singapore.png";
import South from "../asset/flag-korea.png";
import Kaza from "../asset/flag-kazakhstan.png";
import Mali from "../asset/flag-malaysia.png";

import Australia from "../asset/australia.png";

const asias = [
  {
    img: Brun,
    name: "BRUNEI",
  },
  {
    img: China,
    name: "CHINA",
  },
  {
    img: Japan,
    name: "JAPAN",
  },
  {
    img: Kaza,
    name: "KAZAKHSTAN",
  },
  {
    img: Mali,
    name: "MALAYSIA",
  },
  {
    img: Singapore,
    name: "SINGAPORE",
  },
  {
    img: South,
    name: "SOUTH KOREA",
  },
];

function Asia() {
  const handleVisit = () => {
    window.open("https://www.mofa.gov.sa/ar/Pages/default.aspx");
  };
  return (
    <React.Fragment>
      <div className="pt-14 pb-32 border-b-[1px] border-text-200 ">
        <div className=" grid grid-cols-1">
          <div>
            <h5 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem]  leading-[3.0rem] md:leading-[5.0rem] font-normal text-text ml-8 md:ml-16 lg:ml-20 xl:ml-28 font-displace">
              Asia
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-[83%] xl:w-[83%] mx-auto mt-5 ">
          {asias.map((user) => (
            <div className="flex ml-8  md:ml-16 lg:ml-0  mt-5 lg:mt-0 py-5">
              <img
                className="w-[5%] md:w-[3%]  lg:w-[10%]  h-[50%] self-center"
                src={user.img}
              />
              <p className="ml-4 text-[15px] self-center">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-14">
        <div className=" grid grid-cols-1">
          <div>
            <h5 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem]  leading-[3.0rem] md:leading-[5.0rem] font-normal text-text ml-8 md:ml-16 lg:ml-20 xl:ml-28 font-displace">
              Oceania
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 lg:w-[83%] xl:w-[83%] mx-auto mt-5">
          <div className="flex ml-8  md:ml-16 lg:ml-0 ">
            <img
              className="w-[5%] md:w-[3%]  lg:w-[10%] h-[50%]  self-center"
              src={Australia}
            />
            <p className="ml-4 text-[15px] self-center">AUSTRALIA</p>
          </div>
          <div className="flex md:ml-16 ml-8 lg:ml-0 mt-10 lg:mt-0">
            <img
              className="w-[5%] md:w-[3%] lg:w-[10%]  h-[50%]  self-center "
              src={Australia}
            />
            <p className="ml-4  v self-center">NEW ZEALAND</p>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 pt-20 pb-32">
        <div>
          <p className=" text-[20px] ml-3 md:ml-16 lg:ml-20 xl:ml-28 text-text">
            If your country is not in the list contact the nearest
            <span
              onClick={handleVisit}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {" "}
              Saudi Arabia Embassy
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Asia;
