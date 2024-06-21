import React from "react";
import img from "../media/Screenshot 2024-04-14 175712.png";
import img1 from "../media/scrnli_2_26_2024_2-45-18 PM.png";
import img2 from "../media/image.png";
import img3 from "../media/scrnli_6_21_2024_4-22-03 PM.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Section6 = () => {
  const projectsData = [
    {
      a: "https://roshan-studio.netlify.app/home",
      id: 1,
      title: "Roshan Studio",
      img: img,
    },
    {
      a: "https://remiportman.netlify.app/home",
      id: 1,
      title: "Remi Portman",
      img: img1,
    },
    {
      a: "",
      id: 1,
      title: "Roshan Studio",
      img: img3,
    },
    {
      a: "",
      id: 1,
      title: "Opran Studio",
      img: img2,
    },
  ];
  return (
    <div>
      {" "}
      <div className="row m-0 mb-3 d-md-block d-none">
        <div className="col-12">
          <h3 className="text-whites mx-3 mb-3 text-md-start text-center text-uppercase fs-4">
            My Projects
          </h3>
        </div>
        <div className="row mx-0">
          {projectsData.map((project, index) => (
            <div className="col-lg-6 col-12 mb-3" key={index}>
              <div className="box1 bg-opa-black shadow ">
                <img src={project.img} className="w-100" alt={project.title} />
                <h5 className="fs-5 text-whites text-uppercase pt-3 text-center">
                  {project.title}
                </h5>
                <div className="d-flex justify-content-center">
                  <a
                    href={project.a}
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <button className="ReadMore mb-2">
                      <p>VIEW</p>
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-3 m-0 d-md-none d-block">
        <div className="col-12">
          <h3 className="text-whites mx-3 mb-3 text-md-start text-center text-uppercase fs-4">
            My Projects
          </h3>
        </div>
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
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className="pb-4">
                <div className="col-lg-6 col-12 mb-3" key={index}>
                  <div className="box1 bg-opa-black shadow ">
                    <img
                      src={project.img}
                      className="w-100"
                      alt={project.title}
                    />
                    <h5 className="fs-5 text-whites text-uppercase pt-3 text-center">
                      {project.title}
                    </h5>
                    <div className="d-flex justify-content-center">
                      <a
                        href={project.a}
                        className="text-decoration-none"
                        target="_blank"
                      >
                        <button className="ReadMore mb-2">
                          <p>VIEW</p>
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
                      </a>
                    </div>
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

export default Section6;
