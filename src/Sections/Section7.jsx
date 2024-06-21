import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Section7 = () => {
  const testimonials = [
    {
      img: "https://scontent.cdninstagram.com/v/t51.2885-19/383843427_286269110963237_1890477768031356002_n.jpg?stp=dst-jpg_s80x80&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=zdKf80gVHEAQ7kNvgHSrk_m&_nc_ht=scontent.cdninstagram.com&oh=00_AYDeUvVio_jCoW3_lgk4mSL6SgBQpqHy_viRL7a0uUE01g&oe=667B1A9D",
      name: "Opran Studio",
      country: "Slovenia",
      review:
        "it was good, you’re very committed to work, you know what you are doing, you gave me many options from the start already and you listen well to what clients want🙌",
      stars: "★★★★★",
    },
    {
      img: "https://api.tipeee.com/cache/20240505093408/media/200/200/zoom/2353367/202405056637366f99282.png",
      name: "Remi Portman",
      country: "France",
      review:
        "the website you created for me suits my expectations my universe has been well transcribed by webdevify",
      stars: "★★★★☆",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "Emily Davis",
      country: "UK",
      review: "Webdevify. created an amazing, user friendly website. Outstanding service!",
      stars: "★★★★★",
    },
  ];

  return (
    <div>
      <div className="row m-0 mx-0 d-md-block d-none">
        <div className="col-12">
          <h3 className="text-whites  mb-3 text-md-start text-center text-uppercase fs-4">
            testimonials
          </h3>
        </div>{" "}
        <div className="col-12 ">
          <Swiper
            draggable={true}
            grabCursor={true}
            className="mySwiper"
            slidesPerView={3}
            modules={[Autoplay, Pagination]}
            autoplay={true}
            spaceBetween={14}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-4">
                <div className=" my-2 mb-3" key={index}>
                  <div
                    style={{ minHeight: "350px" }}
                    className=" bg-opa-black shadow"
                  >
                    <div className="col-12 px-3 mx-2 pt-2">
                      <img
                        src={testimonial.img}
                        alt=""
                        className="img-fluid  w-25 rounded-circle border border-primary border-5  mt-4"
                        style={{}}
                      />
                      <h6 className="text-whites mt-3">{testimonial.name}</h6>
                      <p className="text-secondary">{testimonial.country}</p>
                      <p className="text-whites fs-6">{testimonial.review}</p>
                      <p className="text-yellow fs-4   mt-2">
                        {testimonial.stars}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="row m-0 mt-3  d-md-none d-block">
        <div className="col-12">
          <h3 className="text-whites  mb-3 text-md-start text-center text-uppercase fs-4">
            testimonials
          </h3>
        </div>{" "}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-4">
                <div className="my-2 mb-3" key={index}>
                  <div
                    style={{ height: "350px" }}
                    className="bg-opa-black shadow"
                  >
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center px-3 pt-2">
                      <img
                        src={testimonial.img}
                        alt=""
                        className="img-fluid w-25 rounded-circle border border-white border-5 mt-4"
                      />
                      <h6 className="text-whites mt-3 text-center">
                        {testimonial.name}
                      </h6>
                      <p className="text-secondary text-center">
                        {testimonial.country}
                      </p>
                      <p className="text-whites fs-6 text-center">
                        {testimonial.review}
                      </p>
                      <p className="text-yellow fs-4 text-center mt-2">
                        {testimonial.stars}
                      </p>
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

export default Section7;
