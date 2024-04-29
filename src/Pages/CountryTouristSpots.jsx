import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../Components/TouristSpotCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const CountryTouristSpots = () => {
    const { countryName } = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [touristSpots, setTouristSpots] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://aura-tour-hub-server.vercel.app/country_tourist_spot/${countryName}`)
            .then(res => res.json())
            .then(data => {
                setTouristSpots(data)
                setLoading(false);
            })
    }, [countryName]);



    return (
        <div>
            {
                loading && <LoadingSpinner></LoadingSpinner>
            }
            <div className="text-center w-3/4 mx-auto my-10 space-y-3">
                <h1 className="font-semibold text-3xl md:text-5xl">Tourist Spots Of Your Dreamed Country</h1>
                <p className=" text-sm md:text-base">Discover the charm and beauty of your dream country with our curated list of top tourist spots. From iconic landmarks to hidden gems, embark on a journey of exploration and wonder as you uncover the treasures that make your dream destination truly unforgettable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                {
                    touristSpots.map(touristSpot => <TouristSpotCard
                        touristSpot={touristSpot}
                        key={touristSpot._id}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default CountryTouristSpots;