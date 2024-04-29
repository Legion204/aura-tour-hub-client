import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TouristSpotCard from "../Components/TouristSpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";

const Home = () => {
    const touristSpots=useLoaderData();

    const [countries,setCountries]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/countries")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);

    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* Tourists Spots Section */}
            <div className=" w-3/4 ml-6 my-10 space-y-3">
                <h1 className="font-extrabold text-5xl">Popular Tour Package</h1>
                <p>Discover the essence of your dream Destination with our popular tour package, meticulously curated to offer you an unforgettable experience. Immerse yourself in the rich culture, stunning landscapes, and iconic landmarks of your dream Destination as you embark on a journey of exploration and discovery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    touristSpots.slice(0,6).map(touristSpot => <TouristSpotCard
                        key={touristSpot._id}
                        touristSpot={touristSpot} ></TouristSpotCard>)
                }
            </div>
            {/* country section */}
            <div className=" w-3/4 ml-6 my-10 space-y-3">
                <h1 className="font-extrabold text-5xl">Explore Your Dreamed Destination</h1>
                <p>Discover the World: Embark on an Unforgettable Journey to Explore Your Dreamed Destination</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    countries.map(country=><CountryCard
                        country={country} 
                        key={country._id}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Home;