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
import { Fade } from 'react-awesome-reveal';

const Slider = () => {
    return (
        <div className='z-0'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 2000,
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
                        <div className='absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5'>
                            <Fade direction='up'><h1 className='font-extrabold text-5xl xl:text-8xl text-[#4dc296]'>welcome to Aura Tour Hub</h1></Fade>
                            <Fade direction='down'><p className="xl:text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p></Fade>
                        </div>
                        <img src={SwitzerlandImg} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5'>
                        <Fade direction='up'><h1 className='font-extrabold text-5xl xl:text-8xl text-[#4dc296]'>Journey Beyond Boundaries: Explore Unforgettable Adventures!</h1></Fade>
                        <Fade direction='down'><p className="xl:text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p></Fade>
                    </div>
                    <img src={EnglandImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5'>
                        <Fade direction='up'><h1 className='font-extrabold text-5xl xl:text-8xl text-[#4dc296]'>Adventure Awaits: Discover Exotic Destinations!</h1></Fade>
                        <Fade direction='down'><p className="xl:text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p></Fade>
                    </div>
                    <img src={FranceImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute flex flex-col items-center justify-center h-full w-full z-10 text-center space-y-5'>
                        <Fade direction='up'><h1 className='font-extrabold text-5xl xl:text-8xl text-[#4dc296]'>Wanderlust Unleashed: Experience Thrilling Escapes!</h1></Fade>
                        <Fade direction='down'><p className="xl:text-3xl text-white">Welcome to AuraTour Hub: Your Gateway to Exceptional Adventures! <br /> Explore, Discover, and Experience the World with Confidence.</p></Fade>
                    </div>
                    <img src={ItalyImg} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;