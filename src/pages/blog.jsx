import React, { useState } from "react";

import Footer from "../components/common/footer";
import { data } from "../data/info";
function Blog() {
  const [datas, setData] = useState(data);
  const allFn = () => {
    setData(data);
  };
  const addFn = () => {
    const newData = data.filter((item) => item.type === "adventure");
    setData(newData);
  };
  const traFn = () => {
    const newData = data.filter((item) => item.type === "travel");
    setData(newData);
  };
  const fashFn = () => {
    const newData = data.filter((item) => item.type === "fashion");
    setData(newData);
  };
  const techFn = () => {
    const newData = data.filter((item) => item.type === "technology");
    setData(newData);
  };
  const braFn = () => {
    const newData = data.filter((item) => item.type === "brand");
    setData(newData);
  };

  return (
    <div>
      <div className="bg-white flex flex-col items-center py-[400px]">
        <h4 className=" font-thirFont text-[36px] font-bold text-[#495057] ">
          Popular topics
        </h4>
        <div className=" flex justify-between w-[100%] px-10 my-12">
          <div className=" flex font-thirFont text-[16px] justify-between w-[700px]">
            <div onClick={() => allFn()}>All</div>
            <div onClick={() => addFn()}>Adventure</div>
            <div onClick={() => traFn()}>Travel</div>
            <div onClick={() => fashFn()}>Fashion</div>
            <div onClick={() => techFn()}>Technology</div>
            <div onClick={() => braFn()}>Brand</div>
          </div>
          <div className="flex font-thirFont text-[16px] justify-between ">
            View All
          </div>
        </div>
        <div className=" flex justify-between mx-8 flex-wrap">
          {datas &&
            datas.map((item, index) => (
              <div key={index} className=" w-[430px] h-[731px] border">
                <div className=" absolute">
                  <img src={item.img} alt="" />
                </div>
                <div className=" flex flex-col items-end     relative">
                  <h4 className="py-1 m-5 px-5  bg-slate-700 rounded-[8px] font-ninFont uppercase text-white font-bold ">
                    {item.type}
                  </h4>
                </div>
                <div className="mt-[330px]    px-5">
                  <div className=" font-sevFont text-[24px]">{item.date}</div>
                  <div className=" font-thirFont text-[18px] font-bold text-[#495057] mt-3 mb-12">
                    {item.head}
                  </div>
                  <p className=" font-firFont text-[12px]">{item.text}</p>
                  <div className=" flex justify-between w-[65%] mt-10">
                    <div>
                      <img src={item.round} alt="igm" />
                    </div>
                    <div className="mt-2 ">
                      <div className=" font-firFont text-[#495057] font-bold">
                        {item.author}
                      </div>
                      <div className=" font-firFont text-[#495057] font-[400]">
                        {item.job}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {datas.length === 0 && (
          <div className=" text-start text-[40px]">topics don't found</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
