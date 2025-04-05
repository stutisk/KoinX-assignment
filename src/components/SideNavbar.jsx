import { useState } from "react";
import { motion } from "framer-motion";
import { useTab } from "../Context/navContext";
import { About } from "./About";
import { Project } from "./Projects";
import { useScroll } from "motion/react"
export const SideNavbar = () => {
  const { activeTab, setActiveTab } = useTab();
  


  const tabs = ["About Me", "Projects", "Contact"];
  return (
    <div className="">
      <div className=" flex text-xl font-bold  text-neutral-300 mt-20 justify-between   ">
        {tabs.map((singleTab) => (
          <motion.div
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 100, damping: 5 },
          }}
            // className="leading-8 transition-colors duration-300 hover:text-neutral-100 cursor-pointe
            className={`relative text-2xl font-bold cursor-pointer transition-all duration-300 
              ${activeTab === singleTab ? "text-white underline underline-offset-8 decoration-pink-500" : "text-neutral-400"}
            `}
            onClick={() => setActiveTab(singleTab)}
          >
            {/* <span className="absolute left-0 -bottom-1 w-16 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"></span> */}
            {singleTab}
          </motion.div>
        ))}
      </div>
      <div className="mt-10 w-full">
        {activeTab === "About Me" && <About />}
        {activeTab === "Projects" && <Project/>}
        
       
      </div>
    </div>
  );
};
