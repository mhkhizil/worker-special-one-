import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-full px-8 py-2 bg-primary">
      <div className="w-full min-h-full gap-8 py-8 text-white  grid md:grid-cols-12 lg:grid-cols-12 grid-cols-1">
        <div className="lg:col-span-6 md:col-span-6 w-full lg:px-8 md:px-6 px-1 flex flex-col gap-8 text-white">
          {/* <div className="flex flex-col gap-2 p-4 rounded-lg bg-gray-200 lg:max-w-[18.5rem] w-full">
            <h2 className="text-3xl font-bold text-blue-700">
              <span className="text-red-600">Shwe</span> Lan Chaung
            </h2>
            <h3 className="text-theme">International Service</h3>
          </div> */}
          <div className=" w-52 h-52">
            <img  src="images/img.jpg" alt="" />
          </div>
        </div>
        <div className="col-span-3 lg:px-8 md:px-6 px-1 flex flex-col items-start gap-8">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <ul className="ml-4">
            <li>
              <a
                className="flex flex-row items-center gap-4"
                href="tel:09448011904"
              >
                <FaPhone color="white" size={15} />
                <p>+95-9448011904</p>
              </a>
            </li>
            <li className="mt-4">
              <a
                className="flex flex-row items-center gap-4"
                href="tel:09985055517"
              >
                <FaPhone color="white" size={15} />
                <p>+95-9985055517</p>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="col-span-3 lg:px-8 md:px-6 px-1 flex flex-col items-start gap-8">
          <h2 className=" font-bold text-xl">Follow Us</h2>
          <ul className="ml-4">
            {/* <li>
              <a
                className="flex flex-row items-center gap-4"
                href="tel:09448011904"
              >
                <FaInstagramSquare color="white" size={15} />
                <p>Instagram</p>
              </a>
            </li> */}
            <li className="mt-4">
              <a
                className="flex flex-row items-center gap-4"
                href="https://www.facebook.com/profile.php?id=61563296681298&mibextid=LQQJ4d"
              >
                <FaFacebook color="white" size={15} />
                <p>Facebook</p>
              </a>
            </li>
            <li className="mt-4">
              <a
                className="flex flex-row items-center gap-4"
                href="https://wa.me/959985055517"//modify ph no 

              >
                <FaWhatsapp color="white" size={15} />
                <p>Whatsapp</p>
              </a>
            </li>
            {/* <li className="mt-4">
              <a
                className="flex flex-row items-center gap-4"
                href="tel:09985055517"
              >
                <FaYoutube color="white" size={15} />
                <p>Youtube</p>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="w-full h-full py-4 text-white border-t border-white"><p className="text-center">Copyright© 2024 Worker Special One. All rights reserved.</p></div>
    </footer>
  );
};
export default Footer;
