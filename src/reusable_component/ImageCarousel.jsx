/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = ({ imagesData }) => {
    // console.log("Carousel Data:", imagesData);

    return (
        <div className="relative w-full rounded-xl">
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={500}
                stopOnHover={true}
            >
                {imagesData?.map((image, index) => (
                    <img key={index} className="rounded-lg" src={image?.image} alt="df"/>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
