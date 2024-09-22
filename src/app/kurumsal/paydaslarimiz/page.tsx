import React from "react";
import Image, { StaticImageData } from "next/image";
import IyteLogo from "../paydaslarimiz/1.png";
import Teknopark2 from "../paydaslarimiz/2.png";
import TeknoparkLogo from "../paydaslarimiz/3.png";
//import ImageName from "path/to/image";

interface StakeHolderProps {
  image: StaticImageData;
  link?: string;
}

const StakeHolder: React.FC<StakeHolderProps> = ({ image, link }) => {
  return (
    <div className="relative w-32 h-32 bg-gray-300 flex items-center justify-center rounded-sm grayscale-0 hover:grayscale lg:hover:scale-105 active:scale-95 active:bg-gray-400 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
      <Image
        src={image}
        alt="Stakeholder image"
        layout="fill"
        objectFit="contain"
        className="object-contain"
        style={{ border: "none" }}
      />
    </div>
  );
};

const Stakeholders = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="flex flex-col justify-center container max-w-4xl mx-auto items-center">
        <div className="my-12">
          <h1 className="title text-center text-4xl text-white font-bold cursor-default">
            Paydaşlarımız
          </h1>
          <div className="line"></div>
        </div>
        <div className="flex space-x-4 px-3 lg:px-0 lg:py-0 flex-wrap w-full justify-center">
          {<StakeHolder image={IyteLogo} />}
          {<StakeHolder image={TeknoparkLogo} />}
          {<StakeHolder image={Teknopark2} />}
          {/*   <StakeHolder image={ImageName} />   */}
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;
