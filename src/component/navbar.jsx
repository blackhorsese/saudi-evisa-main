import React, { useState } from "react";
import Logo from "../asset/logo.svg";
import Logo2 from "../asset/download.svg";
import Example from "./sideover";
import { useNavigate } from "react-router-dom";

export default function Navbar({ color }) {
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  const [open, setOpen] = useState(false);

  const handleOnClose = () => setOpen(false);
  console.log("color!!!!!", color);
  return (
    <div className="bg-grey md:bg-transparent">
      <div className=" grid grid-cols-3 p-5  md:p-10">
        <div className="self-center ">
          {color === "/visa" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/method" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/review" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/termss" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/medical" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/passport" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/personal-info" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/add" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/privact-policy" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/info" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : color === "/terms" ? (
            <img className=" h-[60px] cursor-pointer" src={Logo2} />
          ) : (
            <img className=" h-[60px] cursor-pointer" src={Logo} />
          )}
        </div>
        <div></div>
        <div className="  justify-between self-center hidden lg:flex ">
          <p
            onClick={() => handleNavigate("/")}
            className="text-base self-center"
            style={{
              color: color === "/" ? "white" : "black",
              cursor: "pointer",
            }}
          >
            VISIT SAUDI VISA
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center"
            style={{ color: color === "/" ? "white" : "black" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <button
            onClick={() => handleNavigate("/login")}
            className="  text-black w-[30%] text-sm rounded-full p-2"
            style={{
              background: color === "/" ? "white" : "#02c39a",
              color: color === "/" ? "black" : "white",
            }}
          >
            Sign In
          </button>
        </div>

        <div class="visible lg:invisible justify-end flex">
          <svg
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center text-white border border-t-2 border-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <Example open={open} setOpen={handleOnClose} />
      </div>
    </div>
  );
}
