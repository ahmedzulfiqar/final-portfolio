import React from "react";
import "../index.css";
import Col1 from "../Columns/Col1";
import Col2 from "../Columns/Col2";
import Header from "../Components/Header";

const Main = () => {
  return (
    <>
      <div className="container p-0 d mt-lg-3  kanit-regular " >
        <div className="row  ">
          {" "}
          <div className="col-md-3 col-12 px-md-2 pt-md-3  m-0 d-md-block d-none  ">
            <div className="section1">
              <Col1 />
            </div>
          </div>
          <div className="col-md-9 col-12 p-md-2 m-0 pt-md-3 pt-5">
            <div className="section2 mt-md-0 mt-4">
              <Col2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
