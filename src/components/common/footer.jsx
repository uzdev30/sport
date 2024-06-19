import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import Button from "../core/button";
import Dog from "../../assets/images/dog.png";
function Footer() {
  return (
    <div>
      <div className=" pt-20 pr-10 pl-40 text-white flex justify-between">
        <div>
          <img width={180} height={196} src={logo} alt="img" />
          <div className="text-white font-firFont ">
            Come & Play at Milo’s Padel
          </div>
          <div className=" font-firFont "> Open every day from 7am – 12am</div>
        </div>
        <div className=" flex justify-between flex-wrap w-[42%]">
          <div>
            <h3 className="lowercase text-[28px] font-thirFont text-lightYellow">
              Download
            </h3>
            <div className=" font-firFont text-[21px]">Android App</div>
            <div className=" font-firFont text-[21px]">IOS App</div>
          </div>
          <div>
            <h3 className=" lowercase text-[28px] font-thirFont text-lightYellow">
              locations
            </h3>
            <div className=" font-firFont flex text-[21px]">
              <svg
                className="mt-2 mr-3"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="9" fill="#FFE96F" />
              </svg>
              Pererenan{" "}
            </div>
          </div>
          <div>
            <h3 className="lowercase text-[28px] font-thirFont text-lightYellow">
              get in touch
            </h3>
            <div className="flex justify-between w-[150px] my-8">
              <FaFacebook className="w-[26px] h-[31px]" />
              <FaTiktok className="w-[26px] h-[31px]" />
              <FaInstagram className="w-[26px] h-[31px]" />
            </div>
          </div>
          <div>
            <h3 className="lowercase text-[28px] font-thirFont text-lightYellow">
              company
            </h3>
            <div className=" font-firFont text-[21px]">About Us</div>
            <div className=" font-firFont text-[21px]">Contact us</div>
          </div>
          <div className="mr-72">
            <h3 className="lowercase text-[28px] font-thirFont text-lightYellow">
              others
            </h3>
            <div className=" font-firFont text-[21px]">Activities & Events</div>
            <div className=" font-firFont text-[21px]"> Lessons & Academy</div>
            <div className=" font-firFont text-[21px]"> Pro Shop </div>
          </div>
        </div>
        <div>
          <Button
            active={true}
            info={"book now"}
            clas={
              " w-[304px] h-[72px] text-[32px] rounded-[100px] px-[74px] py-[10px]"
            }
          ></Button>
          <img className="  pt-60" src={Dog} alt="" />
        </div>
      </div>
      <div className="w-[100%] h-0 border-[6px] border-lightYellow "></div>
      <div className="flex flex-col items-center font-firFont py-4 text-white">
        2023 Milo’s Padel. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
