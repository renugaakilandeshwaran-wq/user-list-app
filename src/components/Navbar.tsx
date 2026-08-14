import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className='lg:px-4 px-6 fixed top-0 w-full py-4 flex gap-2  justify-between  bg-blue-900 text-white px- '>
                <div className='items-center text-xs lg:text-xl py-1 flex px-2 bg-green-500  rounded-full'>
                    {/* (◡✿◡) */}
                    '◡' List


                </div>

                <div className=' flex gap-2 lg:justify-center lg:gap-10 justify-between items-center'>
                    <NavLink to="/" className="lg:text-xl text-xs ">
                        Home
                    </NavLink>
                    <NavLink to="/users" className="lg:text-xl text-xs">User </NavLink>
                    <NavLink to="/product" className="lg:text-xl text-xs ">

                        Product
                    </NavLink>
                    <NavLink to="/posts" className="lg:text-xl text-xs">

                        Posts
                    </NavLink>
                    <NavLink to="/todo" className="lg:text-xl text-xs ">

                        Todo
                    </NavLink>
                    <NavLink to="/contact" className="lg:text-xl text-xs">Contact</NavLink>

                </div>

            </nav>
        </>
    )
}
