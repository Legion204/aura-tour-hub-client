import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const TableRow = ({ list, index, setMyList, myList }) => {
    const { touristSpotName, countryName, averageCost, _id,
        seasonality } = list;

    const handelDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://aura-tour-hub-server.vercel.app/tourist_spots/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const remainingList = myList.filter(list => list._id !== _id);
                            setMyList(remainingList);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{touristSpotName}</td>
            <td>{countryName}</td>
            <td>{seasonality}</td>
            <td>{averageCost}</td>
            <td><Link to={`/update_tourist_spot/${_id}`} className="btn bg-accent text-white">Update</Link></td>
            <td><Link onClick={() => handelDelete(_id)} className="btn bg-accent text-white">Delete</Link></td>
        </tr>
    );
};

TableRow.propTypes = {
    list: PropTypes.object,
    index: PropTypes.number,
    setMyList: PropTypes.func,
    myList: PropTypes.array
}
export default TableRow;