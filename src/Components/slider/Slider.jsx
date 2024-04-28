// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwitzerlandImg from "../../assets/Switzerland.jpg"
import EnglandImg from "../../assets/England.jpg"
import FranceImg from "../../assets/France.jpg"
import ItalyImg from "../../assets/Italy.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './sliderStyles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='z-0'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                tag='hello'
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                            <h1 className='font-semibold xl:text-7xl text-[#4dc296]'>welcome to Aura Tour Hub</h1>
                            <p className="xl:text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p>
                        </div>
                        <img src={SwitzerlandImg }/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                        <h1 className='font-semibold text-7xl text-[#4dc296]'>welcome to Aura Tour Hub</h1>
                        <p className="text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p>
                    </div>
                    <img src={EnglandImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                        <h1 className='font-semibold text-7xl text-[#4dc296]'>welcome to Aura Tour Hub</h1>
                        <p className="text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p>
                    </div>
                    <img src={FranceImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                        <h1 className='font-semibold text-7xl text-[#4dc296]'>welcome to Aura Tour Hub</h1>
                        <p className="text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p>
                    </div>
                    <img src={ItalyImg} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;