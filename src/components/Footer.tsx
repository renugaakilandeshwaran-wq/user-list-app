import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="
    w-full  bg-blue-900 py-4 flex justify-between  ">

            <Link to="/" className="text-white lg:text-xl text-xs px-4">Home</Link>
            <h1 className="text-center text-white lg:text-xl text-xs  px-4 mt-">@All Rights Reserved</h1>

            <Link to="/contact" className="text-white lg:text-xl text-xs  px-4">Contact US</Link>

        </div>
    )
}
