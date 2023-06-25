'use client'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './mainCarousel.css';

export default function Home() {

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-black`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
  
    const images = [{
      id: 1,
      src: "carousal.jpg",
      alt: "Image 1"
    },
    {
      id: 2,
      src: "carousal.jpg",
      alt: "Image 2 "
    },
    {
      id: 3,
      src: "carousal.jpg",
      alt: "Image 3"
    }
    ];
  
    return (
        <Slider {...settings}> 
        {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider> 
    );
}