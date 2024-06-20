import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Section7 = () => {
  const testimonials = [
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "John Doe",
      country: "USA",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: "★★★★★",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "Alice Johnson",
      country: "Canada",
      review: "Sed eu ipsum eget sapien maximus dignissim.",
      stars: "★★★★☆",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "Emily Davis",
      country: "UK",
      review: "Vestibulum convallis mi a turpis fermentum.",
      stars: "★★★★★",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "Mike Brown",
      country: "Australia",
      review:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      stars: "★★★☆☆",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "Jane Smith",
      country: "Germany",
      review: "Fusce nec velit vitae odio tincidunt tristique.",
      stars: "★★★★★",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      name: "David Wilson",
      country: "France",
      review:
        "Curabitur quis felis nec leo ultricies ullamcorper nec non mauris.",
      stars: "★★★☆☆",
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
                    style={{ height: "350px" }}
                    className=" bg-opa-black shadow"
                  >
                    <div className="col-12 px-3 mx-2 pt-2">
                      <img
                        src={testimonial.img}
                        alt=""
                        className="img-fluid  w-25 rounded-circle border border-white border-5  mt-4"
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
