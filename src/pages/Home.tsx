import { Link } from "react-router-dom"

Link

export default function Home() {
    return (
        <>
            <div className=' max-w-4xl mx-auto mt-25 lg:mt-40 lg:mb-65 mb-10 ' >
                <div className="grid lg:grid-cols-3 gap-5 ">
                    <Link to="/users">
                        <div className="bg-blue-200 mx-auto text-orange-500 hover:text-green-500 flex items-center justify-center text-center text-4xl rounded-full shadow-lg w-52 h-52 ">
                            User List
                        </div>
                    </Link>
                    <Link to="/todos">
                        <div className="bg-blue-200 mx-auto text-blue-900  hover:text-green-500 flex items-center justify-center text-center text-4xl rounded-full shadow-lg w-52 h-52 ">
                            Todo List
                        </div>
                    </Link>
                    <Link to="/products">
                        <div className="bg-blue-200 mx-auto text-pink-500  hover:text-green-500 flex items-center justify-center text-center text-4xl rounded-full shadow-lg w-52 h-52 ">
                            Product List
                        </div>
                    </Link>
                    <Link to="/posts">
                        <div className="bg-blue-200 mx-auto text-yellow-500 hover:text-green-500 flex items-center justify-center text-center text-4xl rounded-full shadow-lg w-52 h-52 ">
                            Post List
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="bg-blue-200 mx-auto text-red-500 hover:text-green-500 flex items-center justify-center text-center text-4xl rounded-full shadow-lg w-52 h-52 ">
                            Contact
                        </div>
                    </Link>
                    <Link to="/users">
                        <div className="bg-blue-200 mx-auto text-orange-500  hover:text-green-500 flex items-center justify-center text-center text-4xl rounded-full shadow-lg w-52 h-52 ">
                            User List
                        </div>
                    </Link>

                </div>

            </div>
        </>

    )
}
