import React from "react";
// ..images
import logo from "../../assets/images/logo.svg";
import Button from "../core/button";
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  return (
    <nav className="bg-black items-center px-6     w-ful ">
      <ul className=" flex !justify-between">
        <li>
          <img width={128} height={118} src={logo} alt="" />
        </li>
        <li className=" text-white flex justify-between w-[75%]  font-secFont font-[500] text-[26px]  py-9   ">
          <a className=" py-[11px] px-[13px] " href="">
            about us
          </a>
          <a className=" py-[11px] px-[13px] " href="">
            activities & events
          </a>
          <a className=" py-[11px] px-[13px]  " href="">
            lessons & academy <span className="p-[11px] text-[18px] ">▼</span>
          </a>
          <a className=" py-[11px] px-[13px] " href="">
            find players
          </a>
          <a className=" py-[11px] px-[13px] " href="">
            pro shop
          </a>
          <a className=" py-[11px] px-[13px] " href="">
            locations <span className="p-[11px] text-[18px] ">▼</span>
          </a>
          <a className=" py-[11px] px-[13px] " href="">
            contact us
          </a>
        </li>
        <li className=" py-10">
          <Button active={true} info={"book now"}>
            aaaa
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
