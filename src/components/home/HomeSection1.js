import React, { useState, useEffect } from 'react';
import './HomeSection1.css';
import bannerbg1 from '../../assets/images/HomePageBanner.cb4f7a5f.webp';
import bannerbg2 from '../../assets/images/Awardbg.4cf57bb4.webp';
import bannerbg3 from '../../assets/images/Partnership.43c9cda7.webp';
import bannerbg4 from '../../assets/images/LifeCulture.7d556ea2.webp';
import banner1 from '../../assets/images/MobileImage.46081df0.webp';
import banner2 from '../../assets/images/Awardimage.87fa608f.webp';
import banner3 from '../../assets/images/HutGroup.51ec18f1.webp';
import banner4 from '../../assets/images/Officeimg.0227f208.webp';
import nextbtn from '../../assets/images/nextButton.a182ff8a.svg';
import prevbtn from '../../assets/images/prevButton.e47622a3.svg';

const slides = [
    {
        id: 1,
        backgroundImage: bannerbg1,
        para1: "Innovation and Engineering",
        heading: "Pathbreaking Engineering With Proven Business Impact",
        para2: "Build ROI-focused digital solutions that generate business efficiency and value",
        image: banner1
    },
    {
        id: 2,
        backgroundImage: bannerbg2,
        para1: "Awards, Press Releases",
        heading: "Award-winning Innovations Redefining Industry Standards",
        para2: "Perfect your craft with quality par excellence",
        image: banner2
    },
    {
        id: 3,
        backgroundImage: bannerbg3,
        para1: "Partnerships and Case Studies",
        heading: "Making a Difference With Partnerships that Matter",
        para2: "Solutions of scale that support the best in the business",
        image: banner3
    },
    {
        id: 4,
        backgroundImage: bannerbg4,
        para1: "Life, Culture and People",
        heading: "Pushing the Limits Of Fulfillment and Fun",
        para2: "Supercharge your career with unending opportunities and an uplifting culture",
        image: banner4
    },
];

const HomeSection1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000);

        return () => clearInterval(slideInterval);
    }, []);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className=" slider-container">
            <div
                className="slider-wrapper"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }} >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="bg-img slider-innerContainer"
                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                    >
                        <div className="content d-flex w-100">

                            <div className="banner-left ">
                                <p className='banner-p1'>{slide.para1}</p>
                                <h2>{slide.heading}</h2>
                                <p className='banner-p2'>{slide.para2}</p>
                            </div>

                            <div className="banner-right  ml-auto">
                                <img src={slide.image} className="" alt="Slide" loading="lazy" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons for controlling the slides */}
            <div className=" w-100 slidebtn">
                <div onClick={() => handleSlideChange(0)} className={`${currentSlide == 0 ? 'changeslide' : ''}`}>Innovation and Engineering</div>
                <div onClick={() => handleSlideChange(1)} className={`${currentSlide == 1 ? 'changeslide' : ''}`}>Awards, Press Releases</div>
                <div onClick={() => handleSlideChange(2)} className={`${currentSlide == 2 ? 'changeslide' : ''}`}>Partnerships and Case Studies</div>
                <div onClick={() => handleSlideChange(3)} className={`${currentSlide == 3 ? 'changeslide' : ''}`}>Life, Culture and People</div>
            </div>

            {/* Responsivie Slider Buttons */}
            {slides.map((slide, index) => (
                <div className='slidebtn2' key={slide.id}>
                    {/* Slide count dynamically displayed */}
                    <div className="slide-count">{`${currentSlide + 1} / ${slides.length}`}</div>

                    <div className='slidebtnbar'>
                        <div className='div1'>
                            {/* Slide Progress Indicators */}
                            <div className={`slide1 w-25 ${currentSlide == 0 ? 'activeslide' : 'offslide'}`}></div>
                            <div className={`slide1 w-25 ${currentSlide == 1 ? 'activeslide' : 'offslide'}`}></div>
                            <div className={`slide1 w-25 ${currentSlide == 2 ? 'activeslide' : 'offslide'}`}></div>
                            <div className={`slide1 w-25 ${currentSlide == 3 ? 'activeslide' : 'offslide'}`}></div>
                        </div>

                        <div className='div2'>
                            {index === currentSlide ? (
                                <div>
                                    {slide.para1}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className='slidebtninner'>
                        {/* Slide Navigation Buttons */}
                        <img src={prevbtn} onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)} alt="prev" loading="lazy" />
                        <img src={nextbtn} onClick={() => handleSlideChange((currentSlide + 1) % slides.length)} alt="next" loading="lazy" />
                    </div>
                </div>
            ))}

        </section>
    );
};

export default HomeSection1;
