import React, { useEffect, useState } from "react";
import { animate, motion, stagger } from "framer-motion";
import MobCol1 from "../Columns/col1Components/MobCol1";
import img from "../media/Untitled design.png";
import Col1 from "../Columns/Col1";

const MobileNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opener, setopener] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className="col-12 bg-opa-black navbarer z-3  d-block d-md-none py-2 pb-3  text-yellow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="row m-0">
          <div className="col-6">
            <img src={img} className="img-fluid w-50" alt="" />
          </div>
          <div className="col-6 align-self-center d-flex justify-content-end">
            <i
              class="fa fa-bars pe-4"
              aria-hidden="true"
              onClick={() => setopener(!opener)}
            ></i>
          </div>
        </div>
        {opener && <Col1 />}
      </motion.div>
    </>
  );
};

export default MobileNavbar;
