import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import "./App.css";
import { motion } from "framer-motion";
import Header from "./Components/Header";

const Loader = () => {
  return (
    <div className="loader-container">
      <svg viewBox="0 0 240 240" height="240" width="240" class="pl">
        <circle
          stroke-linecap="round"
          stroke-dashoffset="-330"
          stroke-dasharray="0 660"
          stroke-width="20"
          stroke="#000"
          fill="none"
          r="105"
          cy="120"
          cx="120"
          class="pl__ring pl__ring--a"
        ></circle>
        <circle
          stroke-linecap="round"
          stroke-dashoffset="-110"
          stroke-dasharray="0 220"
          stroke-width="20"
          stroke="#000"
          fill="none"
          r="35"
          cy="120"
          cx="120"
          class="pl__ring pl__ring--b"
        ></circle>
        <circle
          stroke-linecap="round"
          stroke-dasharray="0 440"
          stroke-width="20"
          stroke="#000"
          fill="none"
          r="70"
          cy="120"
          cx="85"
          class="pl__ring pl__ring--c"
        ></circle>
        <circle
          stroke-linecap="round"
          stroke-dasharray="0 440"
          stroke-width="20"
          stroke="#000"
          fill="none"
          r="70"
          cy="120"
          cx="155"
          class="pl__ring pl__ring--d"
        ></circle>
      </svg>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div className="">
          <Home />
        </motion.div>
      )}
    </>
  );
};

export default App;
