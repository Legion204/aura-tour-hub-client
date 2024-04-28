import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../Components/TouristSpotCard";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const AllTouristSpots = () => {
    const [touristSpots,setTouristSpots] = useState(useLoaderData());

    const handelSort=()=>{
       const sortedTouristData= [...touristSpots].sort((a, b) => {
            const costA = parseInt(a.averageCost.replace('$', ''), 10);
            const costB = parseInt(b.averageCost.replace('$', ''), 10);
            return costB - costA;
        });
        setTouristSpots(sortedTouristData);
    }

    return (
        <div className=" mb-5">
            <div className="text-center w-3/4 mx-auto my-10 space-y-3">
                <h1 className="font-semibold text-5xl">All Tourist Spots</h1>
                <p>Discover the worlds most captivating tourist spots, each offering its own unique charm and allure. From historic landmarks to natural wonders, immerse yourself in the beauty and wonder of these must-visit destinations.</p>
                <details className="dropdown">
                    <summary className=" text-white bg-accent rounded-md p-4 flex gap-2 items-center">Sort by <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={handelSort}>Descending order</button></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    touristSpots.map(touristSpot => <TouristSpotCard
                        key={touristSpot._id}
                        touristSpot={touristSpot} ></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;