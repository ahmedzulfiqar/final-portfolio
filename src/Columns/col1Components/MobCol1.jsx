import React from "react";
import img1 from "../../media/profile-pic (15).png";
import { motion } from "framer-motion";

const MobCol1 = () => {
  return (
    <>
      <motion.div
        className="row m-0 "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.23, duration: 1 }}
        viewport={{ once: true }}
        style={{ height: "100vh" ,overflowY:"scroll"}}
      >
        <div className="col-12 bg-rich-lightblack m-0 over">
          <img
            src={img1}
            className=" mx-auto d-block w-50  p-1 mt-4 mb-2"
            alt="User Profile"
          ></img>
          <div className="row m-0  text-center">
            <div className="col-12  ">
              <h6 className="text-whites text-uppercase kanit-regular">
                Ahmed Zulfiqar
              </h6>
              <h6 className="text-secondary mt-2 mb-1 kanit-regular">
                Front-End Developer
              </h6>
            </div>
          </div>
        </div>
        <div className="row m-0 pt-3 justify-content-center bg-rich-lightblack">
          <div className="row justify-content-">
            <div
              className="col-6 text-whites text-start fw-semibold"
              style={{ fontSize: "14px" }}
            >
              <p>Residence :</p>
              <p>City :</p>
              <p>Age :</p>
            </div>
            <div
              className="col-6 text-secondary text-end fw-semibold"
              style={{ fontSize: "14px" }}
            >
              <p>Pakistan</p>
              <p>Karachi, Sindh</p>
              <p>19</p>
            </div>
          </div>

          <div class="border-top w-100 border-secondary"></div>

          <div className="col-12 mt-3 mb-3">
            <div className="row m-0 ">
              <div className="col-6">
                <h6
                  className="text-whites text-start"
                  style={{ fontSize: "14px" }}
                >
                  html
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className="text-secondary text-end "
                  style={{ fontSize: "14px" }}
                >
                  90%
                </h6>
              </div>
              <progress
                value="100"
                max="100"
                style={{ "--value": 90, "--max": 100 }}
              ></progress>
            </div>
            <div className="row m-0 Ahmed-3">
              <div className="col-6">
                <h6
                  className="text-whites text-start"
                  style={{ fontSize: "14px" }}
                >
                  CSS
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className="text-secondary text-end "
                  style={{ fontSize: "14px" }}
                >
                  85%
                </h6>
              </div>
              <progress
                value="100"
                max="100"
                style={{ "--value": 85, "--max": 100 }}
              ></progress>
            </div>
            <div className="row m-0 Ahmed-3">
              <div className="col-6">
                <h6
                  className="text-whites text-start"
                  style={{ fontSize: "14px" }}
                >
                  Javascript
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className="text-secondary text-end "
                  style={{ fontSize: "14px" }}
                >
                  75%
                </h6>
              </div>
              <progress
                value="100"
                max="100"
                style={{ "--value": 75, "--max": 100 }}
              ></progress>
            </div>
            <div className="row m-0 Ahmed-3">
              <div className="col-6">
                <h6
                  className="text-whites text-start"
                  style={{ fontSize: "14px" }}
                >
                  React Js
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className="text-secondary text-end "
                  style={{ fontSize: "14px" }}
                >
                  85%
                </h6>
              </div>
              <progress
                value="100"
                max="100"
                style={{ "--value": 85, "--max": 100 }}
              ></progress>
            </div>
            <div className="row m-0 Ahmed-3">
              <div className="col-6">
                <h6
                  className="text-whites text-start"
                  style={{ fontSize: "14px" }}
                >
                  Node
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className="text-secondary text-end "
                  style={{ fontSize: "14px" }}
                >
                  65%
                </h6>
              </div>
              <progress
                value="100"
                max="100"
                style={{ "--value": 65, "--max": 100 }}
              ></progress>
            </div>
            <div className="row m-0 ">
              <div className="col-6">
                <h6
                  className="text-whites text-start"
                  style={{ fontSize: "14px" }}
                >
                  WordPress
                </h6>
              </div>
              <div className="col-6">
                <h6
                  className="text-secondary text-end "
                  style={{ fontSize: "14px" }}
                >
                  80%
                </h6>
              </div>
              <progress
                value="100"
                max="100"
                style={{ "--value": 80, "--max": 100 }}
              ></progress>
            </div>
          </div>

          <div class="border-top w-100 border-secondary"></div>

          <div className="col-12 pt-3 text-secondary hm">
            <h6>Download cv</h6>
          </div>
          <div className="col-12 pt-2 pb-5 text-secondary hm">
            <h6>Contact</h6>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobCol1;
