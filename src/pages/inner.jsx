import React from "react";
import Fix from "../components/core/fix";
import Footer from "../components/common/footer";

import Carousel2 from "../components/common/carousel2";
import Carousel from "../components/common/carousel";
//images & icons
import girl from ".././assets/images/girl.png";
import bigcourt from "./../assets/images/courtbig.png";
import girls from "..//./assets/images/girls.png";
import basket from "..//./assets/images/basketball.png";
import car from "..//./assets/images/car.png";
import ball from "..//./assets/images/ball.png";
import Book from "../components/common/book";

function Inner() {
  return (
    <div>
      <div className=" absolute  ">
        <img src={girls} alt="" />
      </div>
      <div className=" relative h-[951px]  flex flex-col items-center">
        <div className=" pt-96">
          {" "}
          <h2 className=" font-thirFont text-white text-[48px] w-[1281px] text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
          <p className="text-[36px] font-firFont text-white text-center mt-5">
            It is a long established fact that a reader will be distracted.
          </p>
        </div>
      </div>
      <div className="bg-white px-10 pt-20">
        {" "}
        <div className=" text-[28px] font-eleFont font-bold ">Category</div>
        <div className="mt-5 flex justify-between pb-40">
          <div className=" w-[419px]">
            <div className="h-[180px] text-[37px] uppercase font-firFont font-bold  text-gray-600 items-center flex justify-center text-center rounded-[6px] bg-[#EBEEF3]">
              Football
            </div>
            <img className=" mt-10" src={bigcourt} alt="igm" />
          </div>
          <div className=" w-[419px]">
            <img className=" mt-0" src={basket} alt="igm" />
            <div className="h-[262px] mt-10 text-[37px] uppercase font-firFont font-bold  text-gray-600 items-center flex justify-center text-center rounded-[6px] bg-[#EBEEF3]">
              basket <br /> ball
            </div>
          </div>
          <div className=" w-[419px]">
            <div className="h-[180px] text-[37px] uppercase font-firFont font-bold  text-gray-600 items-center flex justify-center text-center rounded-[6px] bg-[#EBEEF3]">
              car sport
            </div>
            <img className=" mt-10" src={car} alt="igm" />
          </div>
          <div className=" w-[419px]">
            <div className="  h-[444px] bg-black">
              <img className=" mt-0" src={ball} alt="igm" />
            </div>
            <div className="h-[183px] mt-10 text-[37px] uppercase font-firFont font-bold  text-gray-600 items-center flex justify-center text-center rounded-[6px] bg-[#EBEEF3]">
              table <br /> tennis
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white ">
        <Fix text={"Sport"} clas={" text-[96px] uppercase font-eigFont"} />
        <div className=" font-thirFont text-[40px] text-[#262626]">Article</div>
      </div>
      <Carousel2 />
      <Book />
      <div className="">
        <div className=" absolute">
          <img height={928} src={girl} alt="" />
        </div>
        <div className=" relative px-20 h-[928px] pt-20">
          <button className=" border py-[26px] px-[29px] w-[167px] text-[20px] font-eleFont  font-[500] text-[#ebeef3]">
            Padel
          </button>
          <div className="pt-[150px] text-[#f9fafc]">
            <div className=" text-[18px] font-firFont font-[400]">
              {" "}
              Agence France-Presse - 04 June 2023
            </div>
            <h4 className="text-[38px] font-thirFont uppercase w-[1200px]">
              Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club
              Confirms
            </h4>
            <p className=" text-[24px] font-firFont w-[1000px]">
              The EuroLeague Finals Top Scorer is the individual award for the
              player that gained the highest points in the EuroLeague Finals
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inner;
