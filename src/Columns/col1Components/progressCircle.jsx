import React from "react";

const progressCircle = () => {
  return (
    <>
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
    </>
  );
};

export default progressCircle;
