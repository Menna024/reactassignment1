import { useState } from 'react';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './../assets/img1.png';
import img2 from './../assets/img2.png';
import img3 from './../assets/img3.png';

const Portfolio = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setEnlargedImage(imageSrc);
    };

    const handleCloseOverlay = () => {
        setEnlargedImage(null);
    };

    return (
        <>
            <div className="bg-white pt-16 pb-20">
                <h2 className="text-bg-[#2C3E50] text-center text-3xl uppercase font-bold">Portfolio Component</h2>
                <div className="flex justify-center pt-5">
                    <div className="relative before-star-icon before:bg-[#2C3E50] after-star-icon after:bg-[#2C3E50] ">
                        <FontAwesomeIcon icon={faStar} className="text-[#2C3E50]" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 w-10/12 justify-center mx-auto pt-5">
                    {[img1, img2, img3, img1, img2, img3].map((imageSrc, index) => (
                        <div
                            key={index}
                            className="relative inline-block rounded-md overflow-hidden cursor-pointer" 
                            onClick={() => handleImageClick(imageSrc)}
                        >
                            <img src={imageSrc}  className="block w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <FontAwesomeIcon icon={faPlus} className="text-white text-7xl font-extrabold" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {enlargedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50"
                    onClick={handleCloseOverlay}
                >
                    <img src={enlargedImage} className="max-w-lg max-h-lg" />
                </div>
            )}
        </>
    );
};

export default Portfolio;