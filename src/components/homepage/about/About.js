import React from "react";
import AliceCarousel from "react-alice-carousel";

import "./About.css";
import { data } from "../../../data/data";

const About = () => {
    const [carousels, setCarousel] = React.useState(data);

    console.log(carousels);

    const items = carousels?.map((carousel) => {
        return (
            <div className="carouselItem">
                <img
                    src={carousel.image}
                    alt="name"
                    style={{
                        width: "240px",
                        height: "140px",
                        cursor: "pointer",
                        textTransform: "uppercase",
                    }}
                />
                <h3>{carousel?.price}</h3>
                <h5>{carousel?.name}</h5>
            </div>
        );
    });
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 4,
        },
    };

    return (
        <div className="About">
            <h1>New Listed Apartment</h1>
            <h4>with over 1 million house for sale </h4>

            <AliceCarousel
                mouseTracking
                keyboardNavigation8
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    );
};

export default About;
