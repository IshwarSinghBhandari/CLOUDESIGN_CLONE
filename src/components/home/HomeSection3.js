import React, { useState } from 'react';
import './HomeSection3.css';

const HomeSection3 = () => {
    // Array of video data
    const videos = [
        {
            id: 0,
            videoSrc: "https://www.cloudesign.com/video/DhybridVid.mp4",
            title: "D’hybrid",
            description: "India’s first men's-only fashion and grooming e-commerce platform",
        },
        {
            id: 1,
            videoSrc: "https://www.cloudesign.com/video/ATFoods.mp4",
            title: "AT&T Foods",
            description: "Comprehensive logistics management with our state-of-the-art logistics solution - Cloudtrack",
        },
        {
            id: 2,
            videoSrc: "https://www.cloudesign.com/video/Nuvama.mp4",
            title: "Nuvama Stocks",
            description: "A next-generation trading solution helping Nuvama keep up with the markets",
        },
        {
            id: 3,
            videoSrc: "https://www.cloudesign.com/video/EdelweissMutualFundsnew.mp4",
            title: "Edelweiss Mutual Funds",
            description: "An all-in-one mutual funds investment solution for investors of all classes.",
        },
        {
            id: 4,
            videoSrc: "https://www.cloudesign.com/video/LnTAvertles.mp4",
            title: "L & T - Avertle",
            description: "Revolutionizing the digital asset space",
        },
    ];

    
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    
    const handleNavClick = (video) => {
        setSelectedVideo(video);
    };
      
    const handlePrev = () => {
        const currentIndex = videos.findIndex(video => video.id === selectedVideo.id);
        const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
        setSelectedVideo(videos[newIndex]);
    };
    
    const handleNext = () => {
        const currentIndex = videos.findIndex(video => video.id === selectedVideo.id);
        const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
        setSelectedVideo(videos[newIndex]);
    };
    

    return (
        <section className='vid-section'>
            <div>
                <h2 className='heading1'>Disruptive Transformation, Diverse Industries</h2>
                <div className='heading-bar'>
                    <div></div>
                </div>

                {/* vid-section navigation  start */}
                {/* for big screen */}
                <div className='vid-nav'>
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavClick(video)}
                            className={`nav-item ${selectedVideo.id == index ? 'selected' : ''}`}
                        >
                            {video.title}
                        </div>
                    ))}
                </div>

                {/* for small screen */}
                <div className="nav-vid-container">
                    <div className="nav-prev" onClick={handlePrev}>
                        <img
                            className="prev-btn"
                            alt="Prev"
                            loading="lazy"
                            width="15"
                            height="17"
                            src="https://www.cloudesign.com/_next/static/media/BackBtnPoly.7af0ce4a.png"
                        />
                    </div>

                    <div className="nav-title">{selectedVideo.title}</div>

                    <div className="nav-next" onClick={handleNext}>
                        <img
                            className="next-btn"
                            alt="Next"
                            loading="lazy"
                            width="15"
                            height="17"
                            src="https://www.cloudesign.com/_next/static/media/NextBtnPoly.2de41cc9.png"
                        />
                    </div>
                </div>

                {/* vid-section navigation end */}

                {/* video section */}
                <div className="video-part">
                    <div className="video-part-main">
                        <div className="video-wrapper">
                            <video
                                src={selectedVideo.videoSrc}
                                autoPlay
                                muted
                                loop
                                preload="auto"
                                className="video"
                            ></video>
                        </div>
                    </div>
                </div>

                {/* Case study/ vid-btm-section */}
                <div className="video-bottom-section">
                    <div className="video-bottom-header">
                        <div className="video-bottom-title">{selectedVideo.title}</div>
                        <div className="video-bottom-description">{selectedVideo.description}</div>
                    </div>
                    <div className="video-bottom-buttons">
                        <a href="#">
                            <button type="submit" className="video-bottom-explore-btn">Explore More</button>
                        </a>
                        <a href="#">
                            <button className="video-bottom-all-btn">All Case Studies</button>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomeSection3;
