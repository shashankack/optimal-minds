import { useState } from "react";
import "../styles/VideoCards.scss";

import thumbnail1 from "../assets/videos/vid1_thumbnail.png";
import thumbnail2 from "../assets/videos/vid2_thumbnail.png";
import thumbnail3 from "../assets/videos/vid3_thumbnail.png";
import video1 from "../assets/videos/vid1.mp4";
import video2 from "../assets/videos/vid2.mp4";
import video3 from "../assets/videos/vid3.mp4";

const videos = [
  { thumbnail: thumbnail1, video: video1 },
  { thumbnail: thumbnail2, video: video2 },
  { thumbnail: thumbnail3, video: video3 },
];

const VideoCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="video-card-container">
      {videos.map((item, index) => (
        <div
          key={index}
          className={`video-card ${
            activeIndex === index
              ? "active"
              : activeIndex !== null
              ? "inactive"
              : ""
          }`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {activeIndex === index ? (
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              className="video"
            ></video>
          ) : (
            <img
              src={item.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
            />
          )}
          <div className="card-content">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae sapien ut libero venenatis ultricies. Ut nec metus at nunc
              efficitur sagittis.
            </p>
            <button className="cta-button">
                Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCards;
