import React from "react";
import Canada from "../asset/canada.png";
import USA from "../asset/usa.png";

function Description() {
  return (
    <>
      <div className="grid grid-cols-1   lg:grid-cols-2 w-5/6 mx-auto my-28">
        <div>
          <h5 className="text-[2.5rem] md:text-[4.0rem] lg:text-[4.0rem] xl:text-[5.0rem]  leading-[3.0rem] md:leading-[5.0rem] font-normal text-text font-displace">
            What is the Saudi eVisa?
          </h5>
        </div>

        <div className="mt-4">
          <p className="text-[14px] ">
            Saudi Arabia is opening its doors to the world through its new
            tourist visa. Through the fast and easy-to-use online portal,
            international visitors from 49 eligible countries can apply for an
            eVisa and discover the warm hospitality of Saudi people the rich
            heritage, vibrant culture, and diverse and breathtaking landscapes;
            from the mountains of Abha to the beaches of the Red Sea to the
            shifting sands of the Empty Quarter.
          </p>

          <p className="text-[14px] mt-10">
            The eVisa will be a one-year, multiple entry visa, allowing tourists
            to spend up to 90 days in the country. The tourist visa allows you
            to take part in tourism-related activities such as, events, family &
            relatives visits, leisure, and Umrah (excluding Hajj) and excludes
            other activities such as studying.
          </p>
        </div>
      </div>

      <div className="border-b-[1px] border-text-200 w-[90%]   pb-4">
        <h5 className="text-[2.5rem] md:text-[4.0rem] lg:text-[4.0rem] xl:text-[4.0rem]  leading-[3.0rem] md:leading-[5.0rem] font-normal text-black ml-8 md:ml-16 lg:ml-20 xl:ml-28 font-displace">
          Eligible Countries
        </h5>
      </div>

      <div className="pt-14 pb-32 border-b-[1px] border-text-200 ">
        <div className=" grid grid-cols-1">
          <div>
            <h5 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem]  leading-[3.0rem] md:leading-[5.0rem] font-normal text-text ml-8 md:ml-16 lg:ml-20 xl:ml-28 font-displace">
              North America
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 lg:w-[83%] xl:w-[83%] mx-auto mt-5">
          <div className="flex ml-8  md:ml-16 lg:ml-0 ">
            <img
              className="w-[5%] md:w-[5%]  lg:w-[10%] h-[50%]  self-center"
              src={Canada}
            />
            <p className="ml-4 text-[15px] self-center">CANADA</p>
          </div>
          <div className="flex md:ml-16 ml-8 lg:ml-0 mt-10 lg:mt-0">
            <img
              className="w-[5%] md:w-[5%] lg:w-[10%]  h-[50%]  self-center "
              src={USA}
            />
            <p className="ml-4  v self-center">US</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
