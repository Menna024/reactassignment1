import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faEdge } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className=" bg-[#2C3E50]">
            <div className="mx-auto py-20 ">
                <div className="justify-between">
                    <div className="grid grid-cols-3 justify-evenly items-center">
                        <div className="text-center">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase 
                            dark:text-white">Location</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                                <li className="mb-4">
                                    <a className="hover:underline ">2215 John Daniel Drive</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Clark, MO 65243</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase
                             dark:text-white">AROUND THE WEB</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <div className="grid grid-cols-4 w-1/2 mx-auto"> 
                                    <FontAwesomeIcon icon={faTwitter} className="text-white 
                                    text-sm mt-2 border-2 p-2 rounded-full" />
                                    <FontAwesomeIcon icon={faFacebook} className="text-white 
                                    text-sm mt-2 border-2 p-2 rounded-full"  />
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white 
                                    text-sm mt-2 border-2 p-2 rounded-full"  />
                                    <FontAwesomeIcon icon={faEdge} className="text-white 
                                    text-sm mt-2 border-2 p-2 rounded-full"  />
                                </div>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 
                            uppercase dark:text-white">ABOUT FREELANCER</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4 ">
                                    <a href="#" className="hover:underline ">Freelance is a free to use, licensed Bootstrap theme created by Route</a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;