import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";

import { testimony } from "../../../data/data";
import "./Testimony.css";

const Testimony = () => {
    const [testimonies, setTestimonies] = useState(testimony);

    const items = testimonies?.map((testimony) => {
        return (
            <div className="carouselItem2">
                <p>{testimony?.testimony}</p>
                <div className="carouselItem2-profiles">
                    <img
                        src={testimony?.img}
                        alt="name"
                        style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            textTransform: "uppercase",
                        }}
                    />
                    <div className="carouselItem2-profiles-left">
                        <h5>{testimony?.name}</h5>
                        <h6>{testimony?.work}</h6>
                    </div>
                </div>
                <span></span>
            </div>
        );
    });
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        790: {
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
                disableButtonsControls
                responsive={responsive}
                autoPlay
                infinite
                items={items}
            />
        </div>
    );
};

export default Testimony;
