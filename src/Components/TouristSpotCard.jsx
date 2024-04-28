import { FaLocationDot, FaMountainSun, FaUser } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const TouristSpotCard = ({ touristSpot }) => {

    const { touristSpotName, location, averageCost, seasonality, travelTime, totalVisitorPerYear, imageUrl,_id } = touristSpot;

    return (
        <div className="justify-self-center">
            <div className="card card-compact w-96 lg:w-[450px] h-[450px] bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{touristSpotName}</h2>
                    <p className="flex items-center text-lg text-gray-500"><span className="text-accent text-lg mr-2"><FaLocationDot /></span>{location}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className="text-lg text-gray-500 flex items-center"><span className="mr-2 text-accent"><FaMountainSun /></span>Seasonality: {seasonality}</p>
                        <p className="text-lg text-gray-500 flex  items-center"><span className="mr-2 text-accent"><IoTimeSharp /></span> Travel Time: {travelTime}</p>
                        <p className="text-lg text-gray-500 lg:col-span-2 flex  items-center"><span className="mr-2 text-accent"><FaUser /></span>Total Visitor Per Year: {totalVisitorPerYear}</p>
                    </div>
                    <div className="card-actions items-center">
                        <Link to={`/tourist_spot_details/${_id}`}><button className="btn bg-accent text-white">View details</button></Link>
                        <p className="flex flex-col text-start text-xl font-medium pl-24 lg:pl-44">Average Cost <span className="text-accent">{averageCost}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
TouristSpotCard.propTypes={
    touristSpot:PropTypes.object
}
export default TouristSpotCard;