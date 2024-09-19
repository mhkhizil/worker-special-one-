import clsx from "clsx";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

type MobileNavProps = {
    isCollapse: boolean
    toggleMobileNav: () => void
    scrollToSection: (section:string) => void
}

const MobileNav = ({isCollapse, toggleMobileNav,scrollToSection}:MobileNavProps) => {
  
    return(
        <div className={clsx("fixed z-50 bg-primary transition-all md:w-[50vw] w-[80vw] duration-500 right-0 h-screen lg:hidden flex flex-col gap-8 p-8 border-l rounded-l-md border-gray-400 justify-start items-start",{
            "translate-x-[100%]":isCollapse,
            "translate-x-0":!isCollapse
        })}>
            <button className="text-white" onClick={toggleMobileNav}><FaChevronCircleRight size={30}/></button>
            <div className="w-full h-full mt-8 flex flex-col items-center">
                <ul className="text-white w-full">
                    <li onClick={() => scrollToSection("home")} className="w-full flex flex-row items-center p-4 justify-between"><p>Home</p><FaCaretRight size={20}/></li>
                    <li onClick={() => scrollToSection("partners")} className="w-full flex flex-row items-center p-4 justify-between"><p>Partners</p><FaCaretRight size={20}/></li>
                    <li onClick={() => scrollToSection("motto")} className="w-full flex flex-row items-center p-4 justify-between"><p>Motto</p><FaCaretRight size={20}/></li>
                    <li onClick={() => scrollToSection("aboutus")} className="w-full flex flex-row items-center p-4 justify-between"><p>About Us</p><FaCaretRight size={20}/></li>
                    <li onClick={() => scrollToSection("service")} className="w-full flex flex-row items-center p-4 justify-between"><p>Services</p><FaCaretRight size={20}/></li>
                   
                    {/* <li onClick={() => scrollToSection("contactus")} className="w-full flex flex-row items-center p-4 justify-between"><p>Contact Us</p><FaCaretRight size={20}/></li> */}
                </ul>
            </div>
        </div>
    )
}
export default MobileNav;