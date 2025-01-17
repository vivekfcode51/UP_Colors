import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/Banner_1.png"
import banner2 from "../assets/Banner_2.png"
import banner3 from "../assets/Banner_3.png"
const ImageCarousel = () => {
    const images = [
        banner1,
        banner2,
        banner3,
    ];

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
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-[18vh] xsm:h-[20vh] rounded-xl bg-contain bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                      
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
