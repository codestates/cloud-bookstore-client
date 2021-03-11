import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

const HomeSlider: React.FC = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <Swiper
      style={{ height: '100%' }}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide className="slideImg1" />
      <SwiperSlide className="slideImg2" />
      <SwiperSlide className="slideImg3" />
      <SwiperSlide className="slideImg4" />
      <SwiperSlide className="slideImg5" />
    </Swiper>
  );
};

export default HomeSlider;
