import { useEffect, useState } from "react";
import type { user } from "../types/type.ts"
import axios from "axios";
import { Link } from "react-router-dom";
function Users() {
    const [users, setUsers] = useState<user[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("")
    const filteredUsers = users.filter((users) =>

        users.name.toLowerCase().includes(search.toLowerCase()) ||
        users.city.toLowerCase().includes(search.toLowerCase())
    );
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get
                ("https://user-list-app-1.onrender.com/users");
            setUsers(response.data);

        } catch (error) {
            setError("Failed to fetch users")
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <h1>
            Loading...
        </h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            <div className="mt-20 px-4 max-w-7xl mx-auto py-4 ">
                <h1 className="text-center text-2xl uppercase  font-bold ">
                    User List
                </h1>
                <input
                    type="text"
                    placeholder="Search Employee"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 mt-4  p-3 rounded-lg w-70 lg:w-140 mb-4 bg-white"

                />


                <div className="grid lg:grid-cols-4 mt-4  gap-5 justify-center items-center max-w-7xl mx-auto">
                    {filteredUsers.map((user) => (

                        <Link to={`/users/${user.id}`}
                            key={user.id}
                            className="border border-gray-300 shadow-lg px-8 lg:py-4 py-2 rounded-lg "
                        >
                            <img src={user.image} alt={user.name} className="mx-auto rounded-lg mt-4" />
                            <div className="text-center mt-4" >
                                <h1 className="font-bold"> {user.name} </h1>
                                <h1 className=""> {user.email} </h1>
                                <h1 className=""> {user.phone} </h1>
                                <h1 className=""> {user.city} </h1>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>



    )
}
export default Users;