import { FaLocationDot } from "react-icons/fa6";
const TouristSpotCard = ({ touristSpot }) => {

    const { touristSpotName, countryName, location, userEmail, userName, averageCost, seasonality, travelTime, shortDescription, totalVisitorPerYear, imageUrl } = touristSpot;

    return (
        <div className="justify-self-center">
            <div className="card card-compact w-96 lg:w-[450px] h-[450px] bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{touristSpotName}</h2>
                    <p className="flex items-center text-lg text-gray-500"><span className="text-black text-lg mr-2"><FaLocationDot /></span>{location}</p>
                    <div className="card-actions items-center">
                        <button className="btn bg-accent text-white">View details</button>
                        <p className="flex flex-col text-start text-xl font-medium pl-24 lg:pl-44">Average Cost <span className="text-accent">{averageCost}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;