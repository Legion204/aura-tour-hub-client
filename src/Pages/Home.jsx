import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TouristSpotCard from "../Components/TouristSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import Lottie from "lottie-react";
import reviewAnimation from "../assets/Animation-review.json"

const Home = () => {
    const touristSpots = useLoaderData();

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://aura-tour-hub-server.vercel.app/countries")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* Tourists Spots Section */}
            <div className="mt-32">
                <div className=" w-3/4 ml-6 my-10 space-y-3">
                    <h1 className="font-extrabold text-5xl">Popular Tour Package</h1>
                    <p>Discover the essence of your dream Destination with our popular tour package, meticulously curated to offer you an unforgettable experience. Immerse yourself in the rich culture, stunning landscapes, and iconic landmarks of your dream Destination as you embark on a journey of exploration and discovery.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        touristSpots.slice(0, 6).map(touristSpot => <TouristSpotCard
                            key={touristSpot._id}
                            touristSpot={touristSpot} ></TouristSpotCard>)
                    }
                </div>
            </div>
            {/* country section */}
            <div className="mt-32">
                <div className=" w-3/4 ml-6 my-10 space-y-3">
                    <h1 className="font-extrabold text-5xl">Explore Your Dreamed Destination</h1>
                    <p>Discover the World: Embark on an Unforgettable Journey to Explore Your Dreamed Destination</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        countries.map(country => <CountryCard
                            country={country}
                            key={country._id}></CountryCard>)
                    }
                </div>
            </div>
            {/* review section */}
            <div className="mt-32">
                <div>
                    <div className=" w-3/4 ml-6 my-10 space-y-3">
                        <h1 className="font-extrabold text-5xl">What Our Client Say About Us</h1>
                        <p>Discover the essence of your dream Destination with our popular tour package, meticulously curated to offer you an unforgettable experience. Immerse yourself in the rich culture, stunning landscapes, and iconic landmarks of your dream Destination as you embark on a journey of exploration and discovery.</p>
                    </div>
                </div>
                <div>
                    <section className="bg-hero bg-no-repeat bg-cover bg-center text-white">
                        <div className="container px-6 py-12 mx-auto">
                            <div className="grid items-center gap-4 xl:grid-cols-5">
                                <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                                <Lottie animationData={reviewAnimation} loop={true} />;
                                </div>
                                <div className="p-6 xl:col-span-3">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="grid content-center gap-4">
                                            <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                                <p>Aura Tour Hub made my dream vacation a reality! From seamless bookings to personalized recommendations, their attention to detail ensured a truly unforgettable experience. Can not wait to book my next adventure with them!</p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                    <div>
                                                        <p className="text-lg font-semibold">Roronoa Zoro</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                                <p>Absolutely phenomenal service from Aura Tour Hub! Their knowledgeable staff went above and beyond to tailor our trip to perfection. Every aspect, from accommodations to excursions, was flawlessly executed. Highly recommend!</p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                    <div>
                                                        <p className="text-lg font-semibold">Vinsmoke Sanji</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid content-center gap-4">
                                            <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                                <p>Aura Tour Hub exceeded all expectations! Their professionalism and expertise shone through every step of the journey. Thanks to their expert guidance, we discovered hidden gems and created memories to last a lifetime. Truly exceptional!</p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                    <div>
                                                        <p className="text-lg font-semibold">Edward Newgate</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                                <p>A huge thank you to Aura Tour Hub for an incredible vacation! Their dedication to customer satisfaction is unmatched. From the moment we inquired to the end of our trip, their team ensured everything ran smoothly. Can not wait to book with them again!</p>
                                                <div className="flex items-center mt-4 space-x-4">
                                                    <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                    <div>
                                                        <p className="text-lg font-semibold">Nico Robin</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;