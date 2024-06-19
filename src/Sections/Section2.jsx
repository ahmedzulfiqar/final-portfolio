import React from "react";
import img1 from "../media/Untitled design.png";

const Section2 = () => {
  return (
    <div>
      {" "}
      <div className="row m-0 my-4">
        <div className="col-12">
          <div className="bg">
            <div className="overlay">
              <div className="row content align-items-center justify-content-center a">
                <div className="col-lg-6 mt-4 mt-md-0 px-3">
                  <div className="container text-white ms-md-3">
                    <h2 className="display-5 kanit-semibold text-center text-md-start">
                      We Are a Premier Web Design Agency
                    </h2>
                    <div class="animated- my-3 fs-4 text-center text-md-start">
                      <span className="fs-4">
                        We Create Amazing{" "}
                        <span className="text-yellow"> Websites</span>{" "}
                      </span>
                    </div>
                    <button class="button type1 mt-2 mt-md-3 mb-4 mb-md-0"></button>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center d-lg-block d-none ">
                  <img
                    src={img1}
                    alt="Image"
                    className="img-fluid w-100"
                    style={{ filter: "grayscale(35%) brightness(90%)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
