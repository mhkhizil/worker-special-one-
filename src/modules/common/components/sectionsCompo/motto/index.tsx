import React from "react";
import { TiTick } from "react-icons/ti";
import { useInView } from "react-intersection-observer";

const Motto = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  //   threshold: 0.4,
  // });
  const { ref: leftRef, inView: LeftInView } = useInView({
    triggerOnce: false,

  });
  const { ref: rightRef, inView: RightInView } = useInView({
    triggerOnce: false,
 
  });
  const { ref: midRef, inView: midInView } = useInView({
    triggerOnce: false,
  
  });
  return (
    <div >
      <div id="motto" className={`w-full h-full `}>
        <h1 className=" text-primary  text-4xl  font-extrabold text-center mb-10">
          Our Motto
        </h1>
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          <div
          ref={leftRef}
            className={`${
              LeftInView ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
            }  relative w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 md:mb-5 sm:mb-5 bg-primary rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-500 ease-in-out shadow-xl group`}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-transform duration-500 group-hover:rotate-180">
              <img
                src="images/visionIcon.png"
                alt="Circular Image"
                className="w-16 h-16 rounded-full "
              />
            </div>
            <h2 className=" mt-4 text-2xl font-bold text-center text-white">
              Our Vision
            </h2>
            <p className="leading-loose text-xl text-white mx-8 my-2">
              To become one of the biggest and most successful overseas
              employment agencies in Myanmar with hard work and dedication.
            </p>
          </div>
          <div
           ref={midRef}
            className={`${
              midInView ? "translate-y-0 opacity-100 " : "translate-y-40 opacity-0"
            } relative w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 md:mb-5 sm:mb-5 bg-primary rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-500 ease-in-out shadow-xl group`}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-transform duration-500 group-hover:rotate-180">
              <img
                src="images/MI2.png"
                alt="Circular Image"
                className="w-16 h-16 rounded-full "
              />
            </div>
            <h2 className=" mt-4 text-2xl font-bold text-center text-white">
              Our Mission
            </h2>
            <p className=" leading-relaxed text-xl text-white mx-8 my-2">
              -To give 100% effort for our customers,clients,and partners.{" "}
              <br />
              -To provide efficient and effective service for our
              customers,clients and partners.
            </p>
          </div>
          <div
           ref={rightRef}
            className={`${
              RightInView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
            }  relative w-full lg:h-full md:min-h-[25vh] p-4 flex flex-col gap-3 md:mb-5 sm:mb-5 bg-primary rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-500 ease-in-out shadow-xl group`}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-transform duration-500 group-hover:rotate-180">
              <img
                src="images/CV2.png"
                alt="Circular Image"
                className="w-24 h-16 rounded-full "
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-center text-white">
              Our Core Values
            </h2>
            <p className=" text-xl text-white mx-8 my-2 leading-loose">
              <span>
                {" "}
                <TiTick className=" inline text-3xl text-green-500 pb-1" />{" "}
                Honesty <br />
              </span>
              <span>
                {" "}
                <TiTick className=" inline text-3xl text-green-500 pb-1" />{" "}
                Customer satisfaction <br />
              </span>
              <span>
                {" "}
                <TiTick className=" inline text-3xl text-green-500 pb-1" />{" "}
                Efficiency <br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
