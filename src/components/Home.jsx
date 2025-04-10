import "./Header.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "bootstrap-icons/font/bootstrap-icons.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import Header from "./Header"
import Banner from "./Banner"
import Footer from "./Footer/Footer"
import banner1 from "../assets/images/1.png"
import banner2 from "../assets/images/2.png"

const Home = () => {
  return (
    <>
      <Header />

      {/* Banner Slider - Full Width */}
      <div className="container-fluid header-swiper-container p-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="headerSwiper"
        >
          <SwiperSlide>
            <img src={banner1 || "/placeholder.svg"} alt="Banner 1" className="header-swiper-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2 || "/placeholder.svg"} alt="Banner 2" className="header-swiper-image" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Banner Component */}
      <div className="container-fluid" style={{ padding: "55px", marginTop: "0" }}>
        <Banner />
      </div>

      <Footer />
    </>
  )
}

export default Home
