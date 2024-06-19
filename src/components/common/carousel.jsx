import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//images
import tennis from "../../assets/images/tennis.webp";
import Button from "../core/button";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "qwerty",
  };

  return (
    <Slider {...settings}>
      <div className=" w-[1447px]   text-white h-[707px]">
        <div className=" absolute    px-52 pt-40">
          <img
            width={1467}
            height={707}
            className=" border-lightYellow h-[707px] rounded-[40px]"
            src={tennis}
            alt=""
          />
        </div>
        <div className=" p-[350px] relative h-[707px]  ">
          <h3 className=" uppercase text-[130px]">pererenan</h3>
          <div className=" flex w-[500px] justify-between">
            <Button info={"explore more"} clas={"uppercase"} active={false} />
            <Button info={"get directions "} clas={"uppercase"} active={true} />
          </div>
        </div>
      </div>
      <div className=" w-[1447px]   text-white h-[707px]">
        <div className=" absolute    px-52 pt-40">
          <img
            width={1467}
            height={707}
            className=" border-lightYellow h-[707px] rounded-[40px]"
            src={tennis}
            alt=""
          />
        </div>
        <div className=" p-[350px] relative h-[707px]  ">
          <h3 className=" uppercase text-[130px]">pererenan</h3>
          <div className=" flex w-[500px] justify-between">
            <Button info={"explore more"} clas={"uppercase"} active={false} />
            <Button info={"get directions "} clas={"uppercase"} active={true} />
          </div>
        </div>
      </div>
      <div className=" w-[1447px]   text-white h-[707px]">
        <div className=" absolute    px-52 pt-40">
          <img
            width={1467}
            height={707}
            className=" border-lightYellow h-[707px] rounded-[40px]"
            src={tennis}
            alt=""
          />
        </div>
        <div className=" p-[350px] relative h-[707px]  ">
          <h3 className=" uppercase text-[130px]">pererenan</h3>
          <div className=" flex w-[500px] justify-between">
            <Button info={"explore more"} clas={"uppercase"} active={false} />
            <Button info={"get directions "} clas={"uppercase"} active={true} />
          </div>
        </div>
      </div>
    </Slider>
  );
}
