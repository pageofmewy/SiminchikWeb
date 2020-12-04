import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const CourseCatTwo = () => {

    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 5
            },
            768:{
                slidesPerView : 4
            },
            640:{
                slidesPerView : 3

            },
            320:{
                slidesPerView : 2
            }
        }
    }

    return (
        <section className="course-category-two">
            <div className="container text-center">
                <div className="inner-container">
                    <div className="course-category-two__carousel">
                        <Swiper {...params}>
                        <div className="item">
                            <div className="course-category-two__single color-1">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Corpus Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-2">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Traductor Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-3">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Programas de radio</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-4">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Quichwadic</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-5">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-targeting"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Duolingo</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-6">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-health"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Firefox</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-5">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-targeting"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Libre Office Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-4">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Simidic</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-1">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Corpus Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-2">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Traductor Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-3">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Programas de Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-4">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Quichwadic</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-1">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-desktop"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Duolingo</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-2">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Firefox</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-3">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Libre Office Quechua</a></h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-category-two__single color-4">
                                <div className="course-category-two__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-two__title"><a href="#">Simidic</a></h3>
                            </div>
                        </div>
                        
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCatTwo;
