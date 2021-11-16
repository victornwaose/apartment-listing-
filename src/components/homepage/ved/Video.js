import React from "react";

import "./Video.css";

const Video = ({ embedId }) => {
    return (
        <div>
            <div className="video__container">
                <h4 className="video__header">
                    Compare your options, side by side
                </h4>
                <iframe
                    className="video__content"
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    );
};

export default Video;
