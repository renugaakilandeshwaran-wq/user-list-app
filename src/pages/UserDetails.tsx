import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import type { user } from "../types/type.ts"


export default function UserDetails() {
    const [user, setUser] = useState<user | null>(null);
    const { id } = useParams();
    useEffect(() => {
        fetchUser();
    }, []);
    const fetchUser = async () => {
        const response = await axios.get(`http://user-list-app-1.onrender.com/users/${id}`);
        setUser(response.data);

    };
    if (!user) {
        return <h1>Loading...</h1>
    }


    return (

        <div className="text-3xl max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center mt-2  ">UserDetails</h1>
            <div className="bg-blue-100 mb-15 py-4 px-4 mt-20 lg:w-200 mx-auto rounded-lg" >

                <h1 className="text-xl mx-auto text-center py-2 l">User ID:{id}</h1>
                <img
                    src={user.image}
                    alt={user.name}
                    width={150}
                    className="lg:w-100 mx-auto w-fit  mt-8 rounded-lg"
                />
                <div className="px-4 lg:px-0 py-4 lg:py-0">
                    <h1 className="w-100 mx-auto  font-bold lg:text-center mt-4 "
                    >{user.name}</h1>
                    <p className="w-100 mx-auto text-xl lg:text-center mt-2"
                    >{user.email}</p>
                    <p className="w-100 mx-auto text-xl lg:text-center mt-2"
                    >{user.phone}</p>
                    <p className="w-100 mx-auto text-xl lg:text-center mt-2 "
                    >{user.city}</p>

                </div>
            </div>
        </div>
    )
}
