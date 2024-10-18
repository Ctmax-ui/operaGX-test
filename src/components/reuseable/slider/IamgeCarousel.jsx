import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imageCarousel.css";

const IamgeCarousel = ({ carouselValue }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides for the images
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 880, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="h-full">
      {carouselValue &&
        carouselValue?.game?.trailers.map((val, key) => {
          let parsedVal = JSON.parse(
            val.trailer || "{}"
          );

          return (
            <div className="w-full h-[400px] slick-inline-flex items-center px-2" key={key}>
              <iframe
                width="100%"
                className="h-full"
                src={parsedVal.url.replace("watch?v=", "embed/") || ''}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}

      {carouselValue &&
        carouselValue?.game?.screenshots.map((val, key) => (
          <div key={key} className="h-[400px] px-2">
            <img
              src={val.url} // Replace with your image URL
              alt={`Slide ${key}`}
              className="w-full h-full object-contain bg-black rounded-md"
            />
          </div>
        ))}
    </Slider>
  );
};

export default IamgeCarousel;
