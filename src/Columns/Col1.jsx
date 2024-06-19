import React from "react";
import img1 from "../media/426699677_777279630537586_1161288758933493331_n.png";
import { motion } from "framer-motion";

const Col1 = () => {
  return (
    <>
      <motion.div
        className="row m-0"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="col-12 bg-light-black m-0 ">
          <img
            src={img1}
            className="rounded-circle mx-auto d-block w-50 border-yellow p-1 mt-4 mb-4"
            alt="User Profile"
          ></img>
          <div className="row m-0  text-center">
            <div className="col-12  mb-2">
              <h5 className="text-whites text-uppercase kanit-regular">
                AHMED Zulfiqar
              </h5>
              <h6 className="text-secondary mt-2 mb-3">FOUNDER & CEO , <span className="text-yellow">WEBDEVIFY</span></h6>
            </div>
          </div>
        </div>
        <div className="row m-0 justify-content-center bg-rich-lightblack">
          

          <div class="border-top w-75 border-secondary"></div>

          <div className="row mt-md-0 mt-2">
            <div className="col-4 mt-4 mb-2 d-flex flex-column align-items-center text-center">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ "--value": 100 }}
              ></div>
              <h6 className="text-whites py-2 text-uppercase">Urdu</h6>
            </div>
            <div className="col-4 mt-4 mb-2 d-flex flex-column align-items-center text-center">
              <div
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ "--value": 90 }}
              ></div>
              <h6 className="text-whites py-2 text-uppercase">English</h6>
            </div>
            <div className="col-4 mt-4 mb-2 d-flex flex-column align-items-center text-center">
              <div
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ "--value": 60 }}
              ></div>
              <h6 className="text-whites py-2 text-uppercase">Hindi</h6>
            </div>
          </div>

          <div class="border-top w-75 border-secondary"></div>

          <div className="row my-4">
            <div className="col-12">
              <div className="row m-0  ">
                <div className="col-6">
                  <h6 className="text-whites">html</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary text-end">90%</h6>
                </div>
                <progress
                  value="100"
                  max="100"
                  style={{ "--value": 90, "--max": 100 }}
                ></progress>
              </div>
              <div className="row m-0 my-3 ">
                <div className="col-6">
                  <h6 className="text-whites">CSS</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary text-end">85%</h6>
                </div>
                <progress
                  value="100"
                  max="100"
                  style={{ "--value": 85, "--max": 100 }}
                ></progress>
              </div>
              <div className="row m-0 my-3">
                <div className="col-6">
                  <h6 className="text-whites">Javascript</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary text-end">75%</h6>
                </div>
                <progress
                  value="100"
                  max="100"
                  style={{ "--value": 75, "--max": 100 }}
                ></progress>
              </div>
              <div className="row m-0 my-3">
                <div className="col-6">
                  <h6 className="text-whites">React Js</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary text-end">85%</h6>
                </div>
                <progress
                  value="100"
                  max="100"
                  style={{ "--value": 85, "--max": 100 }}
                ></progress>
              </div>
              <div className="row m-0 my-3">
                <div className="col-6">
                  <h6 className="text-whites">Node</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary text-end">65%</h6>
                </div>
                <progress
                  value="100"
                  max="100"
                  style={{ "--value": 65, "--max": 100 }}
                ></progress>
              </div>
              <div className="row m-0 ">
                <div className="col-6">
                  <h6 className="text-whites">WordPress</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary text-end">80%</h6>
                </div>
                <progress
                  value="100"
                  max="100"
                  style={{ "--value": 80, "--max": 100 }}
                ></progress>
              </div>
            </div>
          </div>

          <div class="border-top w-75 border-secondary"></div>

          <div className="row mt-4 mb-2 ">
            <div className="col-12 d-flex mx-3">
              <i class="fa fa-check text-yellow" aria-hidden="true"></i>
              <h6 className="text-secondary ms-3">Bootstrap, Material UI</h6>
            </div>
            <div className="col-12 d-flex mx-3">
              <i class="fa fa-check text-yellow" aria-hidden="true"></i>
              <h6 className="text-secondary ms-3">Tailwind, Css</h6>
            </div>
            <div className="col-12 d-flex mx-3">
              <i class="fa fa-check text-yellow" aria-hidden="true"></i>
              <h6 className="text-secondary ms-3">WooCommerce</h6>
            </div>
            <div className="col-12 d-flex mx-3">
              <i class="fa fa-check text-yellow" aria-hidden="true"></i>
              <h6 className="text-secondary ms-3">Libraries</h6>
            </div>
            <div className="col-12 d-flex mx-3">
              <i class="fa fa-check text-yellow" aria-hidden="true"></i>
              <h6 className="text-secondary ms-3">Animations</h6>
            </div>
          </div>
        </div>{" "}
      </motion.div>
    </>
  );
};

export default Col1;
