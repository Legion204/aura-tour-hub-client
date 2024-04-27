import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../Components/TouristSpotCard";

const AllTouristSpots = () => {
    const touristSpots=useLoaderData();
    return (
        <div className=" mb-5">
            <div className="text-center w-3/4 mx-auto my-10 space-y-3">
            <h1 className="font-semibold text-5xl">All Tourist Spots</h1>
            <p>Discover the worlds most captivating tourist spots, each offering its own unique charm and allure. From historic landmarks to natural wonders, immerse yourself in the beauty and wonder of these must-visit destinations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    touristSpots.map(touristSpot=><TouristSpotCard 
                        key={touristSpot._id} 
                        touristSpot={touristSpot} ></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;