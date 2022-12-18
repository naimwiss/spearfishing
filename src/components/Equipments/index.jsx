import React from 'react';
import './index.css';
import { EquipmentData } from './Edata';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Equipments = () => {
  return (
    <div id="equipments">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          // when window width is <= 320px
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          // when window width is <= 640px
          780: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {EquipmentData.map((data, i) => (
          <SwiperSlide key={data.id}>
            <div className="equ_container">
              <h1>{data.name}</h1>
              <img src={data.img} alt="" />
              <p>{data.disc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Equipments;
