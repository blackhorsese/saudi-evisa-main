import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Steppers from "../stepper";


const Review = () => {
  const [inputData, setInputData] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    // Retrieve input data from local storage
    const data = localStorage.getItem('inputData');
    if (data) {
      setInputData(JSON.parse(data));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  

  if (!inputData) {
    return (
      <p className="py-3 px-5 text-red-500 max-w-xs md:text-sm text-xs justify-center text-center items-center overflow-hidden mx-auto font-semibold">
        No address data found.
      </p>
    );
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div
          className="-z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[25%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>
        <div className="md:col-span-2 md:ml-[530px] md:w-[80%] mx-auto w-[90%] mt-10 md:mt-0">
          <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
            Application No.: 230328006206727
          </p>

          <p className="font-displace font-medium text-[30px] mt-10">
            Application Summary
          </p>

          <p className="text-secondary text-[12px] mt-10">Application Type</p>
          <p className="text-gray-500 text-[20px] mt-5">Individual</p>

          <p className="font-displace font-medium text-[30px] mt-20">
            Basic Information
          </p>
          <div>
            <img width={100} height={100} src={inputData.image} alt="Base64 Image"/>
            
            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">
                  First Name or Given Name (English)
                </p>
                <p className="text-[20px] mt-3">{inputData.firstname}</p>
              </div>
              <div>
                <p className="text-[13px] text-secondary">
                  Father Name or Middle Name (English)
                </p>
                <p className="text-[20px]  mt-3">{inputData.father}-</p>
              </div>
            </div>

            <div className="grid grid-cols-1  p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Last Name or Family Name (English)
                </p>
                <p className="text-[20px] mt-3">{inputData.lastname}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5">
              <div>
                <p className="text-[13px] text-secondary">Gender</p>
                <p className="text-[20px] mt-3">{inputData.gender}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Marital Status</p>
                <p className="text-[20px]  mt-3">{inputData.marital}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 p-5">
              <div>
                <p className="text-[13px] text-secondary">Profession</p>
                <p className="text-[20px] mt-3">{inputData.profession}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Date of Birth</p>
                <p className="text-[20px]  mt-3">{inputData.dbirth}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5">
              <div>
                <p className="text-[13px] text-secondary">Country of Birth</p>
                <p className="text-[20px] mt-3">{inputData.cbirth}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">City of Birth</p>
                <p className="text-[20px]  mt-3">{inputData.ctbirth}</p>
              </div>
            </div>

            <div className="grid grid-cols-1  p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Country of Nationality
                </p>
                <p className="text-[20px] mt-3">{inputData.countrynationality}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Current Residence Address</p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">Country</p>
                <p className="text-[20px] mt-3">{inputData.country}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">City</p>
                <p className="text-[20px]  mt-3">{inputData.city}</p>
              </div>
            </div>

            <div className="grid grid-cols-2  p-5 ">
              <div>
                <p className="text-[13px] text-secondary">Zip/Postal Code</p>
                <p className="text-[20px] mt-3">{inputData.zipcode}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Address</p>
                <p className="text-[20px]  mt-3">{inputData.address}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">
              Passport Information / Travel Details
            </p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">Passport Type</p>
                <p className="text-[20px] mt-3">{inputData.passport}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Passport No.</p>
                <p className="text-[20px]  mt-3">{inputData.passportno}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Passport Issue Place (Country or City)
                </p>
                <p className="text-[20px] mt-3">{inputData.passportissueplace}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Passport Issue Date
                </p>
                <p className="text-[20px] mt-3">{inputData.passportissuedate}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Passport No.</p>
                <p className="text-[20px]  mt-3">{inputData.passportno}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Expected Date of Arrival
                </p>
                <p className="text-[20px] mt-3">{inputData.arrivaldate}</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">
                  Expected Date of Departure
                </p>
                <p className="text-[20px]  mt-3">{inputData.departuredate}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Additional Purpose of Visit</p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[20px] ">
                  Event, Family & Relatives, Leisure, Umrah
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Communication Preference </p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">
                  Do you want to receive the visa on a email other than your
                  original email?
                </p>
                <p className="text-[20px] mt-3">{inputData.communication}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">
                  Do you want to receive the visa on a phone number other than
                  your original phone number?
                </p>
                <p className="text-[20px] mt-3">{inputData.phoneno}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">
              Residence Address in Saudi Arabia
            </p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">City</p>
                <p className="text-[20px] mt-3">{inputData.scity}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">Address 1</p>
                <p className="text-[20px] mt-3">{inputData.address1}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">Address 2</p>
                <p className="text-[20px] mt-3">{inputData.address2}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">
                  Name of Person or Hotel
                </p>
                <p className="text-[20px] mt-3">{inputData.nameofperson}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">
                  Primary Contact Number
                </p>
                <p className="text-[20px] mt-3">{inputData.primarynumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">Email</p>
                <p className="text-[20px] mt-3">{inputData.email}</p>
              </div>
            </div>
          </div>
          <div className="flex mt-20">
            <input
              required
              type="checkbox"
              id="myCheckboxs"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <p className=" text-[11px] md:text-[15px] ml-2 self-center">
              {" "}
                I have read and agree all the above terms and conditions.
            </p>
          </div>
          <div className="flex justify-center my-20 ">
            <p className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center mr-10">
              Previous
            </p>
            <button 
              onClick={() => {
                if (isCheckboxChecked) {
                  window.location.href = 'https://buy.stripe.com/4gw7ud3ShcYN20obIQ';
                }
              }}
              disabled={!isCheckboxChecked}
              className={`border-4 border-secondary px-10 py-2 rounded-full text-secondary text-[12px] md:text-[18px] cursor-pointer self-center mr-10 ${!isCheckboxChecked ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Payment
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Review;
