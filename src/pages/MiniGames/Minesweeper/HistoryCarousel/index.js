import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.scss';

const HistoryCarousel = (props) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            //ssr={true} // means to render carousel on server-side.
            infinite={false}
            //autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((data, index)=>
                (
                    <div className="carousel-item" key={index}>
                        <div>0.00x</div>
                        <div>{index+1} Hits</div>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default HistoryCarousel;