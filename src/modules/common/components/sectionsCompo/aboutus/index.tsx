import { FaPhone } from "react-icons/fa6";
import { TbWorldShare } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import React from "react";

const AboutUs = () => {
  const { ref: aboutusLeftRef, inView: aboutUsLeftInView } = useInView({
    triggerOnce: false,
  });
  const { ref: aboutusRightRef, inView: aboutUsRightInView } = useInView({
    triggerOnce: false,
  });
  return (
    <div id="aboutus" className="w-full h-full flex flex-col gap-16">
      <div className="h-full w-full">
        <div
          ref={aboutusLeftRef}
          className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 rounded-lg overflow-hidden"
        >
          <div className="w-full h-full flex flex-col gap-8 p-7">
            <h1 className="w-full text-center font-extrabold text-primary text-4xl ">
              About Us
            </h1>
            <p
              className={clsx("text-primary  font-semibold leading-loose text-justify transition-all duration-700", {
                "opacity-0 translate-y-[100%]": !aboutUsLeftInView,
                "opacity-100 translate-y-0": aboutUsLeftInView,
              })}
            >
              Founded in 2024, the newly formed company is the legacy of Mr. Zaw
              Zaw Cho and Mrs. Khin Thidar Aung, highly experienced formerly
              owners and managing directors of Shar Lei Cho Company Limited(Since 2012). We
              made the name as an oversea employment agency under the name of
              Shar Lei Cho Company Limited with various partners across
              Malaysia. We used to focus our services only on Malaysia to give
              most efficient and effective service for our customers but also
              have plans to partner with other countries too in the future. We
              strive to give the same top-level services for our customers and
              partners.
            </p>
          </div>
          <div
            ref={aboutusRightRef}
            className="w-full lg:min-h-[40vh] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 p-4 gap-4"
          >
            <div
              className={clsx("w-full h-full transition-all duration-700", {
                "opacity-0 translate-x-[100%]": !aboutUsRightInView,
                "opacity-100 translate-x-0": aboutUsRightInView,
              })}
            >
              <img
                className="max-w-full max-h-full object-cover rounded-lg"
                src="images/img1.jpg"
                alt=""
              />
            </div>
            <div
              className={clsx("w-full h-full transition-all duration-1000", {
                "opacity-0 translate-x-[100%]": !aboutUsRightInView,
                "opacity-100 translate-x-0": aboutUsRightInView,
              })}
            >
              <img
                className="max-w-full max-h-full object-cover rounded-lg"
                src="images/img2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className=" text-primary  text-4xl  font-extrabold text-center mb-6">
          Our Leaders
        </h1>
        <div className="w-full h-full grid grid-cols-1">
        <div className="w-full h-full grid grid-cols-1">
        <div className="w-full h-full grid lg:grid-cols-1 md:grid-cols-1 border border-gray-800 rounded-lg p-6">
          <div className="w-full h-full p-4 bg-primary">
              <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 gap-12 justify-center md:pl-8 lg:pl-8">
            <div className="w-full lg:min-h-[30rem] h-full md:min-h-[25rem] flex flex-col gap-7 justify-center">
                <div className="w-full flex lg:ml-0 md:ml-0 ml-0 flex-col lg:gap-4 md:gap-4 gap-4">
                  <h1 className="flex flex-row lg:items-center md:items-center items-start lg:text-center md:text-left text-left font-extrabold text-white lg:text-4xl md:text-2xl text-3xl mt-4">
                    Mrs. Khin Thida Aung
                  </h1>
                  <p className=" text-white">
                    <span className="border-b-2 border-white pb-2">
                      Managing
                    </span>{" "}
                    Director
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <FaPhone color="white" size={35} />
                  <div className="flex flex-col items-center">
                    <a className=" text-white" href="tel:09448011904">+95-9448011904</a>
                    <a className=" text-white"  href="tel:09985055517">+95-9985055517</a>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <TbWorldShare color="white" size={35} />
                  <div className="flex flex-col items-center">
                    <p className=" text-white" >License Number - 182/2024</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <FaLocationDot color="white" size={35} />
                  <div className="flex flex-col items-center">
                    <p className=" text-white" >No.22 Nay Kyar St, Yangon, Myanmar</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full md:object-cover lg:object-cover" src="images/md6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full h-full grid lg:grid-cols-1 md:grid-cols-1 border border-gray-800 rounded-lg p-6">
          <div className="w-full h-full p-4 bg-primary">
              <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 gap-12 justify-center md:pl-8 lg:pl-8">
            <div className="w-full lg:min-h-[30rem] h-full md:min-h-[25rem] flex flex-col gap-7 justify-center">
                <div className="w-full flex lg:ml-0 md:ml-0 ml-0 flex-col lg:gap-4 md:gap-4 gap-4">
                  <h1 className="flex flex-row lg:items-center md:items-center items-start lg:text-center md:text-left text-left font-extrabold text-white lg:text-4xl md:text-2xl text-3xl mt-4">
                    Mrs. Khin Nwe Nwe Hlaing
                  </h1>
                  <p className=" text-white">
                    <span className="border-b-2 border-white pb-2">
                    Director
                    </span>{" "}
                 
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <FaPhone color="white" size={35} />
                  <div className="flex flex-col items-center">
                    <a className=" text-white" href="tel:09448011904">+95-9448011904</a>
                    <a className=" text-white"  href="tel:09985055517">+95-9985055517</a>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <TbWorldShare color="white" size={35} />
                  <div className="flex flex-col items-center">
                    <p className=" text-white" >License Number - 182/2024</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 ml-10">
                  <FaLocationDot color="white" size={35} />
                  <div className="flex flex-col items-center">
                    <p className=" text-white" >No.22 Nay Kyar St, Yangon, Myanmar</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full md:object-cover lg:object-cover" src="images/director.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
    </div>
  );
};
export default AboutUs;
