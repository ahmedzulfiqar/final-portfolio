import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Section5 = () => {
  const pricePlans = [
    {
      title: "Basic Plan",
      price: "100",
      features: [
        "Customized responsive design (1-5 pages)",
        "Basic animations (hover effects, simple transitions)",
        "Contact form integration",
        "Mobile-friendly design",
        "Social media integration (sharing buttons)",
        "Standard support (10 days post-launch)",
        "Estimated timeline: 4-6 weeks",
      ],
    },
    {
      title: "Standard Plan",
      price: "350",
      features: [
        "Enhanced responsive design (up to 10 pages)",
        "Advanced animations and interactive elements",
        "Third-party service integration (e.g., CRM, email marketing)",
        "Mobile optimization and compatibility",
        "Social media integration and sharing buttons",
        "Comprehensive support (30 days post-launch)",
        "Fully custom design tailored to your brand",
        "Up to 3 design revisions",
        "Estimated timeline: 3-4 weeks",
      ],
    },
    {
      title: "Premium Plan",
      price: "custom",
      features: [
        "Fully customized, unique design (unlimited pages)",
        "Advanced animations and interactive experiences (parallax scrolling, custom illustrations)",
        "Integration with complex functionalities (APIs, custom plugins)",
        "Support for multiple languages",
        "Detailed analytics and reporting setup",
        "High scalability and performance optimization",
        "Continuous maintenance and updates included",
        "Estimated timeline: Customized based on project scope",
      ],
    },
  ];

  return (
    <div>
      <div className="row m-0 my-4 d-md-block d-none">
        <div className="col-12">
          <h3 className="text-whites mx-3 mt-3 text-md-start text-center text-uppercase fs-4">
            Pricing
          </h3>
        </div>
        <div className="col-12">
          <div className="row m-0">
            {pricePlans.map((plan, index) => (
              <div
                className="col-lg-4 col-md-6 col-12 px-2 my-3" // Added `px-2` for horizontal padding
                key={index}
              >
                <div className="price_box bg-opa-black shadow p-3 ps-0">
                  {" "}
                  {/* Added padding here */}
                  <div className="col-12 ps-0 pe-3">
                    <h6 className="text-whites text-center text-uppercase text-limit-1 fs-6 mb-3">
                      {" "}
                      {/* Added `mb-3` for spacing below */}
                      {plan.title}
                    </h6>
                    <h4 className="text-yellow text-center text-uppercase fs-1 kanit-light mb-3">
                      {" "}
                      {/* Added `mb-3` for spacing below */}
                      {plan.price}
                      <span className="text-secondary fs-6 px-1">$</span>
                    </h4>
                    <div className="mb-3 d-flex justify-content-center">
                      <div className="border-top w-75 border-secondary"></div>{" "}
                      {/* Removed `my-2` to avoid extra spacing */}
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div className="col-12 d-flex mx-4 mb-2" key={idx}>
                        {" "}
                        {/* Adjusted `mb-2` for consistent spacing */}
                        <i
                          className="fa fa-check text-yellow mt-1" // Removed `pt-1` to avoid double spacing on top
                          aria-hidden="true"
                        ></i>
                        <h6 className="text-secondary ms-3 mt-1 text-limit-2">
                          {" "}
                          {/* Changed `pt-2` to `mt-1` for better alignment */}
                          {feature}
                        </h6>
                      </div>
                    ))}
                    <div className="d-flex justify-content-center mt-4">
                      {" "}
                      {/* Changed `mb-3` to `mt-4` for better spacing above */}
                      <button className="ReadMore mt-2">
                        {" "}
                        {/* Removed `align-self-end` as it was redundant */}
                        <p className="mb-0">VIEW</p>{" "}
                        {/* Changed `mb-0` to remove default margin */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row m-0 mb-3 d-md-none d-block">
        <div className="col-12">
          <h3 className="text-whites mx-3 mt-4 text-md-start text-center text-uppercase fs-4">
            Price plans
          </h3>
        </div>
        <div className="col-12">
          <div className="row m-0">
            <Swiper
              draggable={true}
              grabCursor={true}
              className="mySwiper"
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              autoplay={true}
              spaceBetween={14}
              pagination={{ clickable: true }}
            >
              {pricePlans.map((plan, index) => (
                <SwiperSlide key={index} className="pb-4">
                  <div
                    className="col-lg-4 col-md-6 col-12 my-2 mb-3"
                    key={index}
                  >
                    <div
                      style={{ height: "400px" }}
                      className="bg-opa-black shadow"
                    >
                      <div className="col-12">
                        <h6 className="text-whites text-center text-uppercase text-limit-1 fs-6 p-3">
                          {plan.title}
                        </h6>
                        <h4 className="text-yellow text-center text-uppercase fs-1 kanit-light">
                          {plan.price}
                          <span className="text-secondary fs-6 px-1">$</span>
                        </h4>
                        <div className="mb-3 d-flex justify-content-center">
                          <div className="border-top w-75 border-secondary my-2 "></div>
                        </div>
                        {plan.features.map((feature, idx) => (
                          <div className="col-12 d-flex mx-4 mb-1" key={idx}>
                            <i
                              className="fa fa-check text-yellow pt-1 mt-1"
                              aria-hidden="true"
                            ></i>
                            <h6 className="text-secondary ms-3 pt-2 text-limit-2">
                              {feature}
                            </h6>
                          </div>
                        ))}
                        <div className="d-flex justify-content-center mb-3">
                          <button className="ReadMore align-self-end mt-3 ">
                            <p className="">VIEW</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
