import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Section1 from "../Sections/Section1";
import Section2 from "../Sections/Section2";
import Section3 from "../Sections/Section3";
import Section4 from "../Sections/Section4";
import Section5 from "../Sections/Section5";
import Section6 from "../Sections/Section6";
import Section7 from "../Sections/Section7";

const Col2 = () => {
  return (
    <>
      <motion.div
        className="bg-rich-lightblack p-md-2 pt-0 "
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
        <Section1 />
        <Section2 />
        <Section5 />
        <Section4 />
        <Section6 />
        <Section7 />
        <Section1 />
      </motion.div>
    </>
  );
};

export default Col2;
