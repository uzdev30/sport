import React from "react";
import Fix from "../core/fix";
//images &icons
import tpl from "../../assets/images/tennispl.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";

function Book() {
  return (
    <div className="bg-white items-center pt-5 pb-16  flex flex-col">
      <h4>
        {" "}
        <Fix text={"How to"} clas={" text-[90px] font-eigFont   "} />
      </h4>
      <p className="  font-bold text-[38px]">book your court</p>
      <ul className=" flex w-[100%]  mt-5 justify-between px-20">
        <li>
          <img src={tpl} alt="" />
        </li>
        <li className=" rounded-[40px] w-[641px] h-[871px] bg-lightYellow items-center flex flex-col py-32  ">
          <p className="  font-bold text-[42px] font-thirFont  ">
            download our app{" "}
          </p>
          <p className=" font-firFont text-[24px]">
            For faster booking & real-time schedule
          </p>
          <div className=" flex flex-col mt-32">
            <div className="bg-black">
              <img src={google} alt="" />
            </div>
            <div className="mt-10">
              <img src={apple} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Book;
