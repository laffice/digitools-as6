import React from "react";
import banner from '../../assets/banner.png'
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="flex justify-around my-20">
      <div className="space-y-8">
        <p className="btn bg-[#E1E7FF] text-[#4468f8] rounded-4xl ">New: AI-Powered Tools Available</p>
        <h1 className="text-7xl font-bold">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-sm text-gray-500">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-5">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
            Explore More
          </button>
          <button className="btn  rounded-4xl border-[#4F39F6] text-[#4F39F6]">
            <CiPlay1></CiPlay1> Watch More
          </button>
        </div>
      </div>

      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
