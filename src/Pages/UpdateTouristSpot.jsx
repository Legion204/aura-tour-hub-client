import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristSpot = () => {

    const { touristSpotName, countryName, location, averageCost, seasonality, travelTime, shortDescription, totalVisitorPerYear, imageUrl, _id } = useLoaderData()

    const handelUpdateTouristSpot = e => {
        e.preventDefault()
        const form = e.target;
        const touristSpotName = form.tourist_spot_name.value
        const countryName = form.country_name.value
        const location = form.location.value
        const averageCost = form.average_cost.value
        const seasonality = form.seasonality.value
        const travelTime = form.travel_time.value
        const shortDescription = form.short_description.value
        const totalVisitorPerYear = form.total_visitor_per_year.value
        const imageUrl = form.image_url.value
        const touristSpotData = { touristSpotName, countryName, location, averageCost, seasonality, travelTime, shortDescription, totalVisitorPerYear, imageUrl };
        console.log(touristSpotData);

        // send data to server
        fetch(`https://aura-tour-hub-server.vercel.app/tourist_spots/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(touristSpotData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Tourist spot updated successfully!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="bg-hero bg-center bg-no-repeat bg-cover p-10 lg:p-32 w-full">
            <form onSubmit={handelUpdateTouristSpot} className="w-full">
                <h1 className="text-center font-semibold text-5xl text-white mb-6">Update Tourist spot</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 m">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Tourist spot name</span>
                        </div>
                        <input type="text" placeholder="Tourist spot name" name="tourist_spot_name" defaultValue={touristSpotName} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-white">Country name</span>
                        </div>
                        <select name="country_name" className="select select-bordered text-[#9CA3B4]">
                            <option defaultValue={countryName}>{countryName}</option>
                            <option value={"France"}>France</option>
                            <option value={"Italy"}>Italy</option>
                            <option value={"Spain"}>Spain</option>
                            <option value={"England"}>England</option>
                            <option value={"Switzerland"}>Switzerland</option>
                            <option value={"Netherland"}>Netherland</option>
                        </select>
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Location</span>
                        </div>
                        <input type="text" placeholder="Location" defaultValue={location} name="location" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Average cost</span>
                        </div>
                        <input type="text" placeholder="Average cost" defaultValue={averageCost} name="average_cost" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-white">Seasonality</span>
                        </div>
                        <select name="seasonality" className="select select-bordered text-[#9CA3B4]">
                            <option defaultValue={seasonality}>{seasonality}</option>
                            <option value={"Summer"}>Summer</option>
                            <option value={"Autumn"}>Autumn</option>
                            <option value={"Winter"}>Winter</option>
                            <option value={"Spring"}>Spring</option>
                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Travel time</span>
                        </div>
                        <input type="text" placeholder="Travel time" defaultValue={travelTime} name="travel_time" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Short description</span>
                        </div>
                        <input type="text" placeholder="Short description" defaultValue={shortDescription} name="short_description" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Total visitors per year</span>
                        </div>
                        <input type="text" placeholder="Total visitors per year" defaultValue={totalVisitorPerYear} name="total_visitor_per_year" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full md:col-span-2  lg:col-span-1">
                        <div className="label">
                            <span className="label-text text-white">Image URL</span>
                        </div>
                        <input type="text" placeholder="Image URL" defaultValue={imageUrl} name="image_url" className="input input-bordered w-full" />
                    </label>
                </div>
                <button type="submit" className="btn w-full bg-accent border-none text-white mt-8">Update</button>
            </form>
        </div>
    );
};

export default UpdateTouristSpot;