import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Navbar } from "./components/Home";
import { Homepage } from "./pages/Homepage";
import {  NavProvider } from "./Context/navContext";

function App() {
  // const [displayedText, setDisplayedText] = useState("");
  // const text = "Here is some information about me...";

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     setDisplayedText((prev) => prev + text[index]);
  //     index += 1;
  //     if (index >= text.length) clearInterval(interval);
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, [text]);

  return (
   <NavProvider>
    <div>

      <Homepage />
    </div>
    </NavProvider>
  );
}

export default App;
