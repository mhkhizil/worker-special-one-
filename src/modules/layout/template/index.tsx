import Footer from "@/modules/common/components/footer";
import MobileNav from "@/modules/common/components/mobilenav";
import Navbar from "@/modules/common/components/navbar";
import { LayoutwithChildren } from "@/types/utils";
import { useState } from "react";

const Layout: LayoutwithChildren = ({ children }) => {
  const [isCollapse,setisCollapse] = useState<boolean>(true);
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      setisCollapse(!isCollapse);
      
      const offset = window.innerHeight * 0.2; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
      const targetPosition = elementPosition - offset; 
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  const toggleMobileNav = () => {
      setisCollapse(!isCollapse)
  }
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar scrollToSection={scrollToSection} toggleMobileNav={toggleMobileNav} />
      <MobileNav isCollapse={isCollapse} toggleMobileNav={toggleMobileNav} scrollToSection={scrollToSection}/>
      <div className="flex flex-col mt-28">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
