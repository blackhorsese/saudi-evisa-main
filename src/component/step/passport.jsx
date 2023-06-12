import React from "react";
import Navbar from "../navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";
import Steppers from "../stepper";

function Passport() {
  const location = useLocation();
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  // stepper

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div
          className="-z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[30%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>

        <div className="mt-10 md:mt-0  md:col-span-2 md:ml-[300px]  lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto  w-[90%] ">
          <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
            Application No.: 230328006206727
          </p>

          <div className="mt-10 ">
            <label className="text-secondary font-medium ">
              Passport Type*
            </label>

            <br />
            <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
              <option>Select</option>
              <option>Diplomatic Passport</option>
              <option>Regularrt</option>
              <option>Special Passport</option>
            </select>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Passport No*</label>
            <br />
            <input
              type="text"
              placeholder="Passport No."
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Passport Issue Place (Country or City)*
            </label>
            <br />
            <input
              type="text"
              placeholder="Passport Issue Place (Country or City)"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="md:flex grid ">
            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Passport Issue Date*
              </label>
              <br />
              <input
                type="date"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
              />
              <p className="text-[12px] mt-2 text-gray-400">
                Click on the title of the popup window to scroll multiple
                months/years at a time
              </p>
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Passport Expiry Date*
              </label>
              <br />
              <input
                type="date"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
              />
              <p className="text-[12px] mt-2 text-gray-400">
                Passport must be valid at least 6 months from the Visa
                application submission date
              </p>
            </div>
          </div>

          <div className="md:flex grid ">
            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Expected Date of Arrival*
              </label>
              <br />
              <input
                type="date"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
              />
              <p className="text-[12px] mt-2 text-gray-400">
                Expected Date of Arrival should be chosen in the Visa validity
                (1 year), from the date of submission
              </p>
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Expected Date of Departure*
              </label>
              <br />
              <input
                type="date"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
              />
              <p className="text-[12px] mt-2 text-gray-400">
                The tourist visa is valid for 1 year starting from the issuance
                date and the period of stay is 90 days.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <p className="font-displace text-[23px]  md:text-[25px] font-medium">
              Communication Preference *
            </p>
            <p className="text-[20px] mt-10">
              Do you want to receive the visa on a email other than your
              original email?
            </p>

            <div className="flex justify-between w-[30%] mt-10">
              <div className="flex">
                <input type="checkbox" id="myCheckbox" />
                <p className="self-center ml-2"> YES</p>
              </div>

              <div className="flex ml-5 md:ml-0">
                <input type="checkbox" id="myCheckbox" />
                <p className="self-center ml-2"> NO</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <input
              type="text"
              placeholder="example@gmail.com*"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-14">
            <p className="text-[20px] mt-10">
              Do you want to receive the visa on a phone number other than your
              original phone number?
            </p>

            <div className="flex justify-between w-[30%] mt-10">
              <div className="flex">
                <input type="checkbox" id="myCheckbox" />
                <p className="self-center ml-2"> YES</p>
              </div>

              <div className="flex ml-5 md:ml-0">
                <input type="checkbox" id="myCheckbox" />
                <p className="self-center ml-2 "> NO</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <input
              type="number"
              placeholder="+332222222232"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-20">
            <p className=" text-[30px] font-displace">
              Residence Address in Saudi Arabia
            </p>
          </div>

          <div className="flex justify-between w-[80%] mt-10">
            <div className="flex">
              <input type="checkbox" id="myCheckboxs" />
              <p className="self-center ml-2 "> RESIDENTIAL OR RELATIVE</p>
            </div>

            <div className="flex">
              <input type="checkbox" id="myCheckboxs" />
              <p className="self-center ml-2"> COMMERCIAL ACCOMMODATION</p>
            </div>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Name of Person*
            </label>
            <br />
            <input
              type="text"
              placeholder="Name of Person"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">City*</label>
            <br />
            <select
              type="text"
              placeholder="City"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            >
              <option>Select</option>
              <option>Abha</option>
              <option>Afif</option>
              <option>Al Ghat</option>
            </select>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Address 1*</label>
            <br />
            <input
              type="text"
              placeholder="Address 1"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Address 2*</label>
            <br />
            <input
              type="text"
              placeholder="Address 2"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="md:flex  grid justify-between">
            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Primary Contact Number
              </label>
              <br />
              <div className="flex">
                <div className="border-2 border-gray-400 w-[20%] mt-3 p-3 text-[20px] text-gray-500">
                  966
                </div>
                <input
                  type="number"
                  placeholder="XXXXXXXXXXX"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">Email</label>
              <br />
              <input
                type="mail"
                placeholder="example@example.com"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>
          </div>
          <div className="flex justify-center my-20">
            <p
              onClick={() => handleNavigate("/personal-info")}
              className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center"
            >
              PREVIOUS
            </p>
            <button
              onClick={() => handleNavigate("/medical")}
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

export default Passport;
