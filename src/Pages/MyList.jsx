import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import TableRow from "../Components/TableRow";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);
    console.log(myList);

    useEffect(() => {
        fetch(`https://aura-tour-hub-server.vercel.app/my_list/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyList(data)
            })
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tourist Spot Name</th>
                            <th>Country</th>
                            <th>Seasonality</th>
                            <th>Average Cost</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            myList.map((list, index) => <TableRow
                                key={list._id}
                                list={list}
                                index={index}
                                setMyList={setMyList}
                                myList={myList}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;