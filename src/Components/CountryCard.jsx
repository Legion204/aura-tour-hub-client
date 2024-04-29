import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CountryCard = ({ country }) => {
    const { countryName, imageURL, shortDescription } = country;
    console.log(countryName);
    return (
        <Link className="justify-self-center">
            <div className="justify-self-center">
                <div className="card grid w-96 2xl:w-[450px] h-[500px] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-accent text-2xl">{countryName}</h2>
                        <p className="text-sm">{shortDescription}</p>
                    </div>
                    <figure><img src={imageURL} alt="Shoes" /></figure>
                </div>
            </div>
        </Link>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object
}

export default CountryCard;