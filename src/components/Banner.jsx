import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./banner.css";
import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";

const handleLinkClick = () => {
  window.scrollTo(0, 0); // Scroll to the top
};
const Banner = () => {
  return (
    <section className="hero mt-2 bg-light pt-5 pb-5 shadow-sm">
      <div className="container-fluid ">
        <h2 className="display-6 py-2 d-flex justify-content-center">
          New Arrivals
        </h2>

        <div
          className="d-flex
   jusitfy-content-between
   align-items-center flex-column
   flex-lg-row my-2"
          id="new"
        >
          <div className="col">
            <div className="card sCard">
              <div className="img-container">
                <img
                  className="phone"
                  src="/src/assets/images/fridge3.png"
                  alt="Samsung Galaxy S23 Ultra"
                />
              </div>

              <div className="container">
                <h1>Whirlpool 184 L </h1>
                <h3 className="price">
                  &#8377; 35,449.<small>00</small>
                </h3>

                <a href="/productdetail" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card sCard">
              <div className="img-container">
                <img
                  className="phone"
                  src="/src/assets/images/ac2.png"
                  alt="Samsung Galaxy S23 Ultra"
                />
              </div>

              <div className="container">
                <h1>Samsung AR12BY4YATA Inverter Split AC</h1>
                <h3 className="price">
                  &#8377; 25,449.<small>00</small>
                </h3>
                <a href="/productdetail" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card sCard">
              <div className="img-container">
                <img
                  className="phone"
                  src="/src/assets/images/ac2.png"
                  alt="Samsung Galaxy S23 Ultra"
                />
              </div>

              <div className="container">
                <h1>Samsung Split AC</h1>
                <h3 className="price">
                  &#8377; 25,449.<small>00</small>
                </h3>
                <a
                  href="/productdetail"
                  className="buy    min-width: fit-content;"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card sCard">
              <div className="img-container">
                <img
                  className="phone"
                  src="/src/assets/images/tv3.png"
                  alt="Samsung Galaxy S23 Ultra"
                />
              </div>

              <div className="container">
                <h1>Apple TV 4K</h1>
                <h3 className="price">
                  &#8377; 1,50,444.<small>00</small>
                </h3>
                <a href="/productdetail" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="text-uppercase border-bottom mb-4">
              Featured Products
            </h3>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="card ">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/tv.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className=" d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Television
              </h5>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/fridge2.png"
                  className="card-img-top "
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Refridgerator
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/atta.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Atta Chakki
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/deepfridger.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Deep Freezer
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/ac.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Air Conditioner
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/cac.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Commercial AC
              </h5>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card ">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/microwave.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className=" d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Microwave
              </h5>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/handblender.png"
                  className="card-img-top "
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Handblender
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/geyser.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Geyser
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/waterd.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Water Dispancher
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/washingmachine.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Washing Machine
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/erasebg-transformed.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Tower AC
              </h5>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="card ">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/winAC.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className=" d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Window AC
              </h5>
            </div>
          </div>

          <div className="col">
            <div className="card ">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/waterp.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className=" d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Water Purifier
              </h5>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/cooler.webp"
                  className="card-img-top "
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Air cooler
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/watercooler.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Water cooler
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/mixer.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Mixer
              </h5>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="/fridgelist" onClick={handleLinkClick}>
                <img
                  src="/src/assets/images/juicer.png"
                  className="card-img-top"
                  alt="Card Image"
                />
              </Link>
            </div>
            <div className="d-flex flex-column p-3">
              <h5 className="card-title d-flex justify-content-center">
                Juicer
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h4 className="mt-3 p-3"> New Arrivals</h4>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="heroSwiper"
          >
            <SwiperSlide>
              <img src="/src/assets/images/electronics2.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics3.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics4.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics5.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics6.jpg" alt="" srcSet="" />
            </SwiperSlide>

            <div className="swiper-pagination swiper-pagination1"></div>
            <SwiperSlide>
              <img src="/src/assets/images/electronics7.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics8.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <div className="swiper-pagination swiper-pagination2"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
