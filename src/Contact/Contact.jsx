import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <>
            <div className="bg-white pt-16 pb-20">
                <h2 className="text-bg-[#2C3E50] text-center text-3xl uppercase font-bold">Contact Section</h2>
                <div className="flex justify-center pt-2 ">
                    <div className="relative before-star-icon before:bg-[#2C3E50] after-star-icon after:bg-[#2C3E50] ">
                        <FontAwesomeIcon icon={faStar} className="text-[#2C3E50]"></FontAwesomeIcon>
                    </div>
                </div>

                <form className="max-w-md mx-auto pt-12">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_user_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                        border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-[#5CCEB2] peer" placeholder=" " required />
                        <label htmlFor="floating_user_name" className="peer-focus:font-medium absolute
                         text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
                         top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                          peer-focus:text-[#5CCEB2] peer-placeholder-shown:scale-100 
                          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                          peer-focus:-translate-y-6">UserName</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_user_age"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                            border-0 border-b-2 border-gray-300 appearance-none
                            focus:outline-none focus:ring-0 focus:border-[#5CCEB2] peer"
                            placeholder=" " required />
                        <label htmlFor="floating_user_age" className="peer-focus:font-medium
                         absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
                         transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                         peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                          peer-focus:text-[#5CCEB2] 
                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                          peer-focus:scale-75 peer-focus:-translate-y-6">UserAge</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email"
                            id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                        border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-[#5CCEB2] peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#5CCEB2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password"
                            id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                        border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-[#5CCEB2] peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#5CCEB2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button type="submit" className="text-white bg-[#5CCEB2] focus:ring-4 focus:outline-none focus:ring-[#5CCEB2] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Send Message</button>
                </form>
            </div>
        </>

    );
};

export default Contact;