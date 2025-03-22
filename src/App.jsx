import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './assets/components/navbar';
import { Homepage } from './assets/pages/Homepage';

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
  <div className='font-mono'>
  {/* <Navbar/> */}
  <Homepage/>
  </div>
  );
}

export default App;
