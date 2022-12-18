import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const Gallery = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerGroup={1}
        className="gal_container"
        id="gallery"
      >
        <SwiperSlide className="i_con">
          <img
            src="https://www.deeperblue.com/wp-content/uploads/2014/10/485102480-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://cdn.filestackcontent.com/resize=w:1860/quality=v:75/auto_image/compress/u2HsgDTiOTtHTziWa5yQ"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="http://www.xtremespots.com/wp-content/uploads/2012/09/Spearfishing-Black-Point2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://spearfishingtoday.com/wp-content/uploads/2018/10/Fishing_Cozumel_Cruise_Charter.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://i.ytimg.com/vi/d9Yx1wRitjI/maxresdefault.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://www.spearoland.com/wp-content/uploads/2020/03/shutterstock_1640539462.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://www.evolvefreediving.com/wp-content/uploads/2017/06/Image-1-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://californiadiver.com/wp-content/uploads/2016/01/Spearfisherman-DP.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="i_con">
          <img
            src="https://www.insidehook.com/wp-content/uploads/2019/03/Spearfishing_So_1464716301.jpg?fit=1200%2C630"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Gallery;
