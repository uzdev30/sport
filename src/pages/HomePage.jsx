import Footer from "../components/common/footer";
import React from "react";
import Button from "../components/core/button";
import Fix from "../components/core/fix";
import Carousel from "../components/common/carousel";
import Book from "../components/common/book";
//images

import bg from "../assets/images/bg.jpeg";
import tennis from "../assets/images/tennis.png";
import player from "../assets/images/player.png";
import court from "../assets/images/court.png";
import peoples from "../assets/images/peoples.png";
import nova from "../assets/images/nova.png";
import womenvs from "../assets/images/womenvs.png";
import women from "../assets/images/women.png";
import star from "../assets/images/start.png";
import bluestar from "../assets/images/bluestar.png";
import blackstar from "../assets/images/blackstar.png";
import bag from "../assets/images/bag.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import first from "../assets//images/player3.png";
import second from "../assets//images/tenplayer.png";
import third from "../assets//images/player5.svg";
import fourth from "../assets//images/player4.svg";
import fifth from "../assets//images/player10.png";
import sixth from "../assets//images/playeten.png";

function HomePage() {
  return (
    <div>
      <div className=" absolute w-full">
        <img className="w-full h-[841px] object-cover" src={bg} alt="img" />
        <div>s</div>
      </div>
      <div className=" flex items-center pt-[250px]">
        <div className="relative  items-center  mx-auto text-center  ">
          <h1 className=" inline text-[73px] text-white font-bold  gap-5 text-center     ">
            First{"  "} <Fix text={"Padel Club"} />
            {"  "} in Indonesia
          </h1>
          <Button
            active={true}
            clas={" w-[289px] mx-auto uppercase"}
            info={"Book your Court"}
          ></Button>
        </div>
      </div>
      <div className=" flex mt-[500px] px-14 h-[972px]">
        <div className=" z-0">
          <img width={674} className=" ml-24 z-0" src={tennis} alt="" />
        </div>
        <div className=" mt-60">
          <img width={611} className="  " src={player} alt="" />
        </div>
        <div className="bg-white w-[655px] rounded-[49px] h-[836px] p-10 py-16">
          <h4 className=" text-[100px] font-[500] font-eigFont ">
            WELCOME TO <Fix text={"MILO'S"} /> PADEL
          </h4>
          <p className=" text-[29px] font-firFont my-10">
            We are thrilled to bring one of the world’s fastest-growing sports
            to Bali. Whether you are an experienced Padel player or playing for
            the first time, we look forward to welcoming you to Milo’s Padel –
            Bali’s No.1 Padel Club.
          </p>
          <Button
            info={"read more"}
            clas="uppercase w-[186px] text-[20px] font-firFont "
            active={true}
          ></Button>
        </div>
      </div>
      <div className="bg-[#EFEFEF] pb-14  ">
        <div className=" flex justify-between px-5 py-14 ">
          <div className="">
            <img width={593} src={court} alt="" />
            <h3 className=" font-bold text-[38px] ">
              "Fantastic experience!" <Fix text={"-Alex"}></Fix>
            </h3>
          </div>
          <div className=" mt-32">
            <div className=" absolute">
              <img width={503} height={520} src={peoples} alt="" />
            </div>
            <div className=" relative w-[503px] h-[520px]">
              <h4 className=" flex flex-col py-40 items-center mx-auto">
                <Fix
                  text={"We Are"}
                  clas={"uppercase text-[81px] font-eigFont text-center"}
                />

                <Fix text={"milo's padel"} clas={" text-[30px] font-[900] "} />
              </h4>
            </div>
          </div>
          <div className=" w-[654px] px-5 items-center ">
            <h3 className=" font-eigFont w-[554px] text-center h-[182px] leading-[110%]     gap-10 text-[83px]">
              Join our <Fix text={"Community"} />
            </h3>
            <p className=" font-firFont text-[21px] my-5">
              Become a part of the Milo’s Padel community and enhance your Padel
              journey surrounded by the beauty of Bali.
            </p>
            <p className=" font-firFont text-[21px] my-10">
              Connect with fellow enthusiasts, from beginners to seasoned
              players, sharing a common love for this thrilling sport. As a
              member, you’ll enjoy exclusive access to events, tournaments, and
              social gatherings to make new connections.
            </p>
            <p className=" font-firFont text-[21px] my-5">
              Select a community below and be part of something <br />{" "}
              extraordinary!
              <ol>
                <li>1.Download our app</li>
                <li>2.Create a match</li>
                <li>3. Find a match partner</li>
              </ol>
            </p>
          </div>
        </div>
        <div className=" flex justify-between px-48">
          <Button active={true} info={"pererenan"} clas={"uppercase"}></Button>
          <Button active={true} info={"canggu"} clas={"uppercase"}></Button>
          <Button active={true} info={"ubud"} clas={"uppercase"}></Button>
          <Button active={true} info={"Kerobokan"} clas={"uppercase"}></Button>
          <Button active={true} info={"seseh"} clas={"uppercase"}></Button>
          <Button active={true} info={"Kedungu"} clas={"uppercase"}></Button>
        </div>
      </div>
      <Book />
      <div className=" pt-10 pb-60">
        <div className=" relative  text-white flex flex-col items-center">
          <Fix text={"Location "} clas={" text-[140px] font-eigFont"} />
        </div>
        <Carousel />
      </div>
      <div className="bg-white">
        <ul className="flex flex-wrap">
          <li className="px-10 w-[633px] h-[578px] bg-[#EFEFEF] items-center flex-col flex pt-40">
            <h1 className="  font-eigFont uppercase text-[74px]">
              Find Players
            </h1>
            <p className=" text-[17px] w-[499px] py-10 font-firFont">
              Looking for new Padel opponents? Download our Milo’s Padel app,
              create a match and start a game with newfound friends. What are
              you waiting for?
            </p>
            <Button
              info={"read more"}
              clas={"uppercase"}
              active={true}
            ></Button>
          </li>
          <li>
            <img width={633} src={nova} alt="" />
          </li>
          <li className="px-10 w-[633px] h-[578px] bg-[#EFEFEF] items-center flex-col flex pt-40">
            <h1 className="  font-eigFont uppercase text-[74px]">
              Padel Academy
            </h1>
            <p className=" text-[17px] w-[499px] py-10 font-firFont">
              Join our Padel club and book personalized coaching or group
              lessons to level up your game. Unlock your Padel potential with
              our experienced coaches at Milo’s Padel in Bali!
            </p>
            <Button
              info={"read more"}
              clas={"uppercase"}
              active={true}
            ></Button>
          </li>
          <li>
            <img width={633} src={womenvs} alt="" />
          </li>
          <li className="px-10 w-[633px] h-[578px] bg-[#EFEFEF] items-center flex-col flex pt-40">
            <h1 className="uppercase  font-eigFont text-[74px]">
              activites & events{" "}
            </h1>
            <p className=" text-[17px] w-[499px] py-10 font-firFont">
              Whether you’re a seasoned player or just starting, our jungle
              oasis is the perfect place to enjoy the game and create
              unforgettable memories. Come by and be a part of the fun at
            </p>
            <Button
              info={"read more"}
              clas={"uppercase"}
              active={true}
            ></Button>
          </li>
          <li>
            <img width={633} src={women} alt="" />
          </li>
        </ul>
      </div>
      <div className="bg-white  flex flex-col items-center pt-20 ">
        <div className=" lowercase  text-[38px]  font-thirFont">Pro Shop</div>
        <div className="flex flex-row justify-between pt-10 w-[63%] pb-5  ">
          <div className=" shadow-3xl w-[269px]  rounded-[48px] h-[659px] px-10">
            <img className="mx-auto mt-14 mb-6" src={star} alt="" />
            <h6 className=" font-sevFont uppercase text-center leading-5 py-8 text-[27px]">
              Starvie Dronos galaxy speed Pro 2.0
            </h6>
            <p className="w-[199px] text-center font-firFont text-[16px]">
              The padel racket from Dronos Galaxy Speed 2.0 is combines the
              strength of 3K Carbon in the head with the rigidity of Carbon
              Fiber and Aluminium in the frame. 
            </p>
            <div className="mt-5 font-eleFont font-[700] text-center">
              Rp 4.300.000
            </div>
          </div>
          <div className=" shadow-3xl w-[269px] rounded-[48px] h-[659px] px-10">
            <img className="mx-auto mt-14 mb-6" src={bluestar} alt="" />
            <h6 className=" font-sevFont uppercase text-center leading-5 py-8 text-[27px]">
              Starvie basaito Osiris Pro 2.0
            </h6>
            <p className="w-[199px] text-center font-firFont text-[16px]">
              Perfect for those seeking an aggressive playing style, this model
              boasts a PRO 50 medium-density rubber, high balance, and a
              teardrop shape.
            </p>
            <div className="mt-5 font-eleFont font-[700] text-center">
              Rp 4.700.000
            </div>
          </div>
          <div className=" shadow-3xl w-[269px] rounded-[48px] h-[659px] px-10">
            <img className="mx-auto mt-14 mb-6" src={blackstar} alt="" />
            <h6 className=" font-sevFont uppercase text-center leading-5 py-8 text-[27px]">
              Titania Kepler Pro 2.0
            </h6>
            <p className="w-[199px] text-center font-firFont text-[16px]">
              Padel racket with its cutting-edge PRO 50 rubber core and 100%
              Carbon 3K composition, the Titania Kepler Pro 2.0 racket not only
              offers superior power and control but also proves to be
              exceptionally maneuverable in defense.
            </p>
            <div className="mt-5 font-eleFont font-[700] text-center">
              Rp 3.600.000
            </div>
          </div>
          <div className=" shadow-3xl w-[269px] rounded-[48px] h-[659px] px-10">
            <img className="mx-auto mt-14 mb-6" src={bag} alt="" />
            <h6 className=" font-sevFont uppercase text-center leading-5 py-8 text-[27px]">
              Milo’s Padel Totebag
            </h6>
            <p className="w-[199px] text-center font-firFont text-[16px]">
              A simple, stylish and comfortable tote bag from Milo’s Padel.
            </p>
            <div className="mt-5 font-eleFont font-[700] text-center">
              Rp 4.00.000
            </div>
          </div>
        </div>
        <Button
          active={true}
          info={"visit our pro-shop "}
          clas={"uppercase  text-[14px] my-10"}
        ></Button>
      </div>
      <div className="bg-[#EFEFEF] flex flex-col items-center py-10">
        <h1 className=" font-eigFont text-[80px]">Let's Get Social</h1>
        <div className="flex justify-between w-[200px] my-8">
          <FaFacebook className="w-[26px] h-[31px]" />
          <FaTiktok className="w-[26px] h-[31px]" />
          <FaInstagram className="w-[26px] h-[31px]" />
        </div>
        <div className=" flex justify-between flex-wrap">
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
          <img src={fourth} alt="" />
          <img src={fifth} alt="" />
          <img src={sixth} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
