import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Keyboard} from "swiper/modules";
import "../../styles/styles.scss";
import "./slider.scss";
import frida from "../../images/frida.png";
import dasha from "../../images/dasha.png";
import olya from "../../images/olya.png";
import yulya from "../../images/yulya.png";
import room from "../../images/room.png";
import cups from "../../images/cups.png";
import girls from "../../images/girls.png";
import lecture from "../../images/lecture.png";
import win from "../../images/win.jpg";

const slidesData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: frida,
    name: "Галя",
    position: "Художник",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: dasha,
    name: "Лена",
    position: "Скульптор",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: yulya,
    name: "Катя",
    position: "Учитель",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: olya,
    name: "Таня",
    position: "Поэт",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: room,
    name: "Ира",
    position: "Инженер",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: cups,
    name: "Лена",
    position: "Скульптор",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: girls,
    name: "Катя",
    position: "Учитель",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: lecture,
    name: "Таня",
    position: "Поэт",
  },
  {
    id:9,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    avatar: win,
    name: "Ира",
    position: "Инженер",
  },
];

export default function Slider() {
  return (
    <>
      <div className="slider-container">
        <Swiper
          modules={[Pagination, Keyboard]}
          pagination={{
            bullets: true,
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          className="mySwiper"
          grabCursor
          slideToClickedSlide
        //   slidesPerView="auto"
          initialSlide={1}
          centeredSlides
          loop={true}
          speed="800"
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            650: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slidesData.map(slide => (
            <SwiperSlide key={slide.id} className="slide">
              <p className="slide-text">{slide.text}</p>
              <div className="slide-container">
                <img src={slide.avatar} alt={slide.name} className="slide-container-avatar"/>
                <div className="slide-container-person">
                  <h3 className="slide-container-person-name">{slide.name}</h3>
                  <p className="slide-container-person-position">
                    {slide.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
