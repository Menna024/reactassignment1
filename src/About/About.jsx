import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (

        < >
            <div className=" bg-[#1ABC9C] pt-32 pb-20">
                <h2 className="text-white text-center text-3xl uppercase font-bold">About Component</h2>

                <div className="flex justify-center pt-5 ">
                    <div className="relative before-star-icon before:bg-white after-star-icon after:bg-white">
                        <FontAwesomeIcon icon={faStar} className="text-white"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="content pt-5 pe-20 ps-20 pb-20 justify-center flex">
                    <p className="pe-5 text-sm text-white w-5/12">Freelancer is a free bootstrap theme created by Route. The download includes the complete
                        source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                        easy customization.</p>
                    <p className="ps-5 text-sm text-white w-5/12">Freelancer is a free bootstrap theme created by Route. The download includes the complete
                        source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                        easy customization.</p>
                </div>
            </div>
        </>

    );
};

export default About;