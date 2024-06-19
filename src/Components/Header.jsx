import React, { useEffect, useState } from "react";
import { animate, motion, stagger } from "framer-motion";
import MobCol1 from "../Columns/col1Components/MobCol1";
import img from "../media/Black White Simple Initial B Letter Logo.png";

const MobileNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 300 },
  };
  const variants2 = {
    open: { opacity: 1, x: -6 },
    closed: { opacity: 0, x: -300 },
  };
  const staggerMenuItems = stagger(0.15, { startDelay: 0.3 });

  useEffect(() => {
    animate(
      ".items",
      open
        ? { opacity: 1, scale: 1, y: -50 }
        : { opacity: 0, scale: 0.9, Y: 60 },
      {
        duration: 0.5,
        delay: open ? staggerMenuItems : 0,
      }
    );
  }, [open]);

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
        className="col-12 bg-opa-black position-fixed navbarer z-3  d-block d-md-none py-4 text-yellow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container px-0 ps-lg-0 ps-2">
          <div className="row m-0">
            {/* /*LEFT*/}
            <div
              className="d-md-none d-flex position-fixed  rounded-2 start-0 z-3 ms-lg-5 ms-3 align-items-center"
              style={{ top: "1.9vh", width: "max-content" }}
            >
              <div className="btn btn-lg border-0 rounded-0 mt-1 border-start border-dark border-opacity-10 py-md-4 px-md-4 p-2  btn-main text-uppercase text-light">
                <i
                  className="fa fa-user text-yellow"
                  onClick={() => setopen2(!open2)}
                ></i>
              </div>
            </div>
            <motion.div
              animate={open2 ? "open" : "closed"}
              initial={{ opacity: 0 }}
              variants={variants2}
              transition={{ duration: 0.3, delay: 0 }}
              className="fixednavbar mt-5 vh-100 bg-opa-black border-0 shadow position-fixed   d-lg-none d-flex justify-content-center align-items-center"
            >
              <div
                className="d-block text-center overflow-hidden text-uppercase text-whites pt-2 me-1 "
                style={{ overflowY: "hidden" }}
                onClick={() => setopen2(!open2)}
              >
                <MobCol1 />
              </div>
            </motion.div>

            {/* /*LOGO*/}
            <div className="col-lg-4  col-12 text-center z-2">
              <img src={img} alt="" style={{ width: "30px" }} />
            </div>

            {/* /*RIGHT*/}
            <div
              className="d-md-none d-flex justify-content-end position-fixed overflow-hidden  rounded-2 end-0 z-3 me-lg-5 me-3  align-items-center"
              style={{ top: "1.9vh", width: "max-content" }}
            >
              <div className="btn btn-lg border-0 rounded-0 mt-1  border-start border-dark border-opacity-10 py-md-4 px-md-4 p-2  btn-main text-uppercase text-light">
                <label class="hamburger align-self-center">
                  <input type="checkbox" checked={open} />
                  <svg viewBox="0 0 32 32" onClick={() => setopen(!open)}>
                    <path
                      class="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path class="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={open ? "open" : "closed"}
          initial={{ opacity: 0 }}
          variants={variants}
          transition={{ duration: 0.3, delay: 0 }}
          className="fixednavbar mt-5 bg-opa-black vh-100 border-0 shadow position-fixed z-0 w-100 top-0  end-0 p-5 d-lg-none d-flex justify-content-center align-items-center"
        >
          <div
            className="d-block text-center text-uppercase text-whites pt-5"
            onClick={() => setopen(!open)}
          >
            <div className="fs-2 py-3 items ">Home</div>
            <div className="fs-2 py-3 items"> Our Work</div>
            <div className="fs-2 py-3 items"> Services</div>
            <div className="fs-2 py-3 items"> About Us</div>
            <div className="fs-2 py-2 mt-4 btn-main text-light  rounded-1 px-4 items items2">
              {" "}
            </div>
          </div>
          <div className="d-block position-absolute text-center items  bottom-0  ">
            {" "}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;
