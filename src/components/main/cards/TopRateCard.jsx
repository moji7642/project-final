import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { apiKey, baseUrl, baseUrlImage } from "../../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import MovieCard from "../styleCard/MovieCard";

export default function TopRateCard() {
  const [card, setCard] = useState([]);
  async function apiCard() {
    const { data } = await axios.get(
      `${baseUrl}/movie/top_rated?api_key=${apiKey}`
    );
    setCard(data.results);
  }
  useEffect(() => {
    apiCard();
  }, []);
  return (
    <div>
      <div className="py-4 px-6">
        <h1 className="text-2xl my-2">Top Rating</h1>
        <Swiper
          rewind={true}
          navigation={true}
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {card.map(({ title, poster_path, vote_average,id }) => {
            return (
              <SwiperSlide key={id}>
                <MovieCard 
                  title={title}
                  img={poster_path}
                  rating={vote_average}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

// {card.map(({poster_path,vote_average,title})=>{

// })}
