import { FaMapLocationDot, FaMountainSun, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { IoIosTime } from "react-icons/io";

const TouristSpotDetails = () => {

    const { touristSpotName, countryName, location, averageCost, seasonality, travelTime, shortDescription, totalVisitorPerYear, imageUrl, userName, userEmail } = useLoaderData();

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col-reverse mx-auto xl:flex-row lg:flex-col-reverse ">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-full xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <h1 className="font-Playfair text-2xl font-bold bg-accent p-2 rounded-md text-white">{touristSpotName}</h1>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <h1 className="font-Playfair text-2xl font-bold underline">DESCRIPTION</h1>
                                <p className="font-Work">{shortDescription}</p>
                            </div>
                        </div>
                        <div className="flex justify-between space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <h2 className="font-Playfair text-xl font-bold underline">Country</h2>
                                <p className="font-Work flex items-center gap-2 text-lg"><BiWorld className="text-accent text-2xl" />{countryName}</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="font-Playfair text-xl font-bold underline">Location</h2>
                                <p className="font-Work flex items-center gap-2 text-lg"><FaMapLocationDot className="text-accent text-2xl" />{location}</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="font-Playfair text-xl font-bold underline">Seasonality</h2>
                                <p className="font-Work flex items-center gap-2 text-lg"><FaMountainSun className="text-accent text-2xl" />{seasonality}</p>
                            </div>
                        </div>
                        <div className="flex justify-between space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <h1 className="font-Playfair text-xl font-bold underline">Travel Time</h1>
                                <p className="font-Work flex items-center gap-2 text-lg"><IoIosTime className="text-accent text-xl" />{travelTime}</p>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-Playfair text-xl font-bold underline">Total Visitor Per Year</h1>
                                <p className="font-Work flex items-center gap-2 text-lg"><FaUser className="text-accent text-xl" />{totalVisitorPerYear}</p>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-Playfair text-xl font-bold underline">Average Cost</h1>
                                <p className="font-Playfair text-accent text-2xl font-bold">{averageCost}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-Playfair text-xl font-bold underline">Data Added By</h1>
                            <h1 className="font-Work flex items-center gap-2"><FaUserCircle className="text-accent text-xl" />{userName}</h1>
                            <h1 className="font-Work flex items-center gap-2"><MdEmail className="text-accent text-xl" />{userEmail}</h1>
                        </div>
                    </div>
                    <div className="lg:w-full xl:w-3/5 dark:bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={imageUrl} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TouristSpotDetails;