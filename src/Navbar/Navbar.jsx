import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#2C3E50] sticky z-40 top-0 start-0 border-b
         border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center justify-between mx-auto p-4 h-20">
                <span className="self-center text-2xl font-semibold whitespace-nowrap
                 dark:text-white uppercase ms-32">Start Framework</span>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <NavLink to={"/"} style={({ isActive }) => ({
                                backgroundColor: isActive ? '#5CCEB2' : 'transparent',
                                transitionDuration: '0.4s',
                            })}
                                className="block py-2 px-3 text-white  
                            rounded uppercase"
                                aria-current="page">About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Portfolio"} style={({ isActive }) => ({
                                backgroundColor: isActive ? '#5CCEB2' : 'transparent',
                                transitionDuration: '0.4s',
                            })}
                                className="block py-2 px-3 text-white  
                            rounded uppercase">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Contact"} style={({ isActive }) => ({
                                backgroundColor: isActive ? '#5CCEB2' : 'transparent',
                                transitionDuration: '0.4s',
                            })}
                                className="block py-2 px-3 me-32 text-white  
                            rounded uppercase">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;