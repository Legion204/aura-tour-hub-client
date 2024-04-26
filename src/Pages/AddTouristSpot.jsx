
const AddTouristSpot = () => {


        const handelAddTouristSpot=e=>{
            e.preventDefault()
            const form = e.target;
            const touristSpotName=form.tourist_spot_name.value 
            const countryName=form.country_name.value
            const location=form.location.value 
            const userEmail=form.user_email.value
            const userName=form.user_name.value
            const averageCost=form.average_cost.value
            const seasonality=form.seasonality.value
            const travelTime=form.travel_time.value
            const shortDescription=form.short_description.value
            const totalVisitorPerYear=form.total_visitor_per_year.value
            const imageUrl=form.image_url.value
            const touristSpotData={touristSpotName,countryName,location,userEmail,userName,averageCost,seasonality,travelTime,shortDescription,totalVisitorPerYear,imageUrl};
            console.log(touristSpotData);
        }

    return (
        <div className="bg-hero bg-center bg-no-repeat bg-cover">
            <form onSubmit={handelAddTouristSpot}  className="flex flex-col justify-center space-y-4 mx-10 lg:h-[80svh] overflow-hidden ">
                <h1 className="text-center font-semibold text-5xl text-white">Add Tourist spot</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Tourist spot name</span>
                        </div>
                        <input type="text" placeholder="Tourist spot name" name="tourist_spot_name"  className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Country name</span>
                        </div>
                        <input type="text" placeholder="Country name" name="country_name" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Location</span>
                        </div>
                        <input type="text" placeholder="Location" name="location" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">User email</span>
                        </div>
                        <input type="text" placeholder="User email" name="user_email" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">User name</span>
                        </div>
                        <input type="text" placeholder="User name" name="user_name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Average cost</span>
                        </div>
                        <input type="text" placeholder="Average cost" name="average_cost" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Seasonality</span>
                        </div>
                        <input type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-white">Travel time</span>
                        </div>
                        <input type="text" placeholder="Travel time" name="travel_time" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full lg:col-span-2  ">
                        <div className="label">
                            <span className="label-text text-white">Short description</span>
                        </div>
                        <input type="text" placeholder="Short description" name="short_description" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full lg:col-span-2 ">
                        <div className="label">
                            <span className="label-text text-white">Total visitors per year</span>
                        </div>
                        <input type="text" placeholder="Total visitors per year" name="total_visitor_per_year" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full lg:col-span-4 ">
                        <div className="label">
                            <span className="label-text text-white">Image URL</span>
                        </div>
                        <input type="text" placeholder="Image URL" name="image_url" className="input input-bordered w-full " />
                    </label>
                </div>
                <button type="submit" className="btn w-full bg-accent border-none text-white">Add</button>
            </form>

        </div>
    );
};

export default AddTouristSpot;