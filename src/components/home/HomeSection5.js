import React, { useState, useEffect } from 'react';
import './HomeSection5.css';

const HomeSection5 = () => {
    const slides = [
        {
            id: 1,
            image: 'https://www.cloudesign.com/_next/static/media/praveensharma.ac3c9c8e.webp',
            description: `As a growing company, finding top-notch engineering talent at affordable rates is one of the 
                    biggest challenges. Cloudesign, a strategic partner to us, has provided us Angular, ReactJs, 
                    Laravel & UI Developers at short notice for a wide range of projects at Cactus Communications. 
                    They are quick to provide candidates, always very quick in communications, and overall keeping 
                    the process low friction. Cloudesign Engineers took control of our projects in a way that exceeded 
                    my expectations. We have been happy with the quality of the software engineers as well as their 
                    management team.`,
            name: "Praveen Sharma",
            title: "VP, Engineering, Cactus Communications"
            
        },
        {
            id: 2,
            image: 'https://www.cloudesign.com/_next/static/media/ShannonKenny.cc370f88.webp',
            description: `Cloudesign’s developers have supported us in our in-house web development, providing us with critical time-sensitive work. The production work is always on time and within budget, which has been a valuable asset to our technology startup during a growth phase. The Cloudesign team members have outstanding communication and are a pleasure to work with.`,
            name: "Shannon Kenny",
            title: "Founder & CEO, Prontopia"
        },
        {
            id: 3,
            image: 'https://www.cloudesign.com/_next/static/media/HarshJha.7920121c.webp',
            description: `Cloudesign is an important strategic partner to Edelweiss Securities & Wealth Management Group and with the suite of IT services provided in the last 4 years, now also one of the preferred technology partners to Edelweiss.`,
            name: "Harsh Jha",
            title: "Group Head of Technology - Nuvama Group /CIO/ CTO"
        },
        {
            id: 4,
            image: 'https://www.cloudesign.com/_next/static/media/RikardWindh.4020e513.webp',
            description: `Cloudesign's DevOps execution proved to us, beyond doubt, the perks of this development style. The team executed our project swiftly and delivered a high-performance product in no time. Every issue that arose was handled quickly through Cloudesign's signature DevOps style.`,
            name: "Rikard Windh",
            title: "Founder, Combain"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('');

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleSlideChange = (nextIndex) => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setFadeClass('');
        }, 800); 
    };

    const currentSlide = slides[currentIndex];

    return (
        <section className="customer-section">
            <div className="customer-container" >
                <h3 className="customer-heading">What our Customers Say</h3>
                <div className="customer-divider"></div>
                <div className={`customer-content ${fadeClass}`}>
                    <div className="customer-info">
                        <img
                            alt="Profile"
                            loading="lazy"
                            width="1280"
                            height="1016"
                            decoding="async"
                            src={currentSlide.image}
                            className="customer-image"
                        />
                        <div className="customer-feedback">
                            <p className="customer-feedback-text">{currentSlide.description}</p>
                            <div className="customer-footer">
                                <div className="customer-details">
                                    <h2 className="customer-name">{currentSlide.name}</h2>
                                    <h3 className="customer-title">{currentSlide.title}</h3>
                                </div>
                                <div className="customer-navigation">
                                    <div className="customer-prev" onClick={handlePrev}>
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="27" cy="27" r="26.5" fill="white" stroke="#DA3643"></circle>
                                            <path d="M17.3208 27L31.8397 18.6175L31.8397 35.3825L17.3208 27Z" fill="#DA3643"></path>
                                        </svg>
                                    </div>
                                    <div className="customer-next" onClick={handleNext}>
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27" cy="27" r="26.5" transform="rotate(-180 27 27)" fill="white" stroke="#DA3643"></circle>
                                            <path d="M36.6792 27L22.1603 35.3825L22.1603 18.6175L36.6792 27Z" fill="#DA3643"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection5;
