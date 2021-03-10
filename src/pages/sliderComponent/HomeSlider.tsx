import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

const HomeSlider: React.FC<RouteComponentProps> = (
  props: RouteComponentProps,
) => {
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
      <SwiperSlide
        className="slideImg1"
        onClick={() => props.history.push('/main/novel/4')}
      />
      <SwiperSlide
        className="slideImg2"
        onClick={() => props.history.push('/main/novel/12')}
      />
      <SwiperSlide
        className="slideImg3"
        onClick={() => props.history.push('/main/novel/14')}
      />
      <SwiperSlide
        className="slideImg4"
        onClick={() => props.history.push('/main/novel/20')}
      />
      <SwiperSlide
        className="slideImg5"
        onClick={() => props.history.push('/main/novel/27')}
      />
    </Swiper>
  );
};

export default HomeSlider;
