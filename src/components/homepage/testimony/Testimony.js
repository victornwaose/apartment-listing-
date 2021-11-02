import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";

import { testimony } from "../../../data/data";
import "./Testimony.css";

const Testimony = () => {
    const [testimonies, setTestimonies] = useState(testimony);

    const items = testimonies?.map((testimony) => {
        return (
            <div className="carouselItem">
                <img
                    src={testimony?.img}
                    alt="name"
                    style={{
                        width: "5%",
                        height: "5%",
                        borderRadius: "50%",
                        cursor: "pointer",
                        textTransform: "uppercase",
                    }}
                />

                <h5>{testimony?.name}</h5>
            </div>
        );
    });
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 3,
        },
    };

    return (
        <div className="testimony">
            <div className="testimony-text">
                <h5>Client Review</h5>
                <h1>We Build In The Trust Of Our Client & Agent</h1>
            </div>
            <AliceCarousel
                mouseTracking
                keyboardNavigation8
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    );
};

export default Testimony;