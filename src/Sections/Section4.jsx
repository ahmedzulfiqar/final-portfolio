import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Section4 = () => {
  const servicesData = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Crafting responsive websites and web applications tailored to your needs, using modern technologies and best practices to ensure optimal performance and user experience.",
    },
    {
      title: "UI DESIGN",
      description:
        "Creating visually appealing user interfaces that are intuitive and user-friendly, focusing on usability and accessibility to enhance engagement and satisfaction.",
    },

    {
      title: "Animation Webpages",
      description:
        "Integrating captivating animations and interactive elements into webpages to enhance engagement, storytelling, and brand identity, creating memorable user experiences.",
    },
  ];

  return (
    <div>
      <div className="row my-4 m-0 d-md-block ">
        <h3 className="text-whites ms-md-3 ps-mds-4 text-md-start text-center text-uppercase fs-4">
          Our Services
        </h3>
        <div className="row mt-2 m-0">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-3" key={index}>
              <div className="box bg-opa-black pt-4 px-3 d-flex flex-column justify-content-between h-100 shadow">
                <div>
                  <h6 className="text-whites text-uppercase fs-5">
                    {service.title}
                  </h6>
                  <p className="text-secondary text-limit">
                    {service.description}
                  </p>
                </div>
                <button className="ReadMore align-self-start mb-3">
                  <p>Read More</p>
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
          ))}
        </div>
      </div>

      {/* /*dasd */}
      <div className="row mt-4 m-0 d-md-none d-none">
        <h3 className="text-whites ms-md-3 mb-3 ps-mds-4 text-md-start text-center text-uppercase fs-4">
          My Services
        </h3>
        <div className="col-12 ">
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
            {servicesData.map((service, index) => (
              <SwiperSlide key={index} className="pb-4">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="box bg-opa-black pt-4 px-3 d-flex flex-column justify-content-between h-100 shadow">
                    <div>
                      <h6 className="text-whites text-uppercase fs-5">
                        {service.title}
                      </h6>
                      <p className="text-secondary text-limit">
                        {service.description}
                      </p>
                    </div>
                    <button className="ReadMore align-self-start mb-3">
                      <p>Read More</p>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section4;
