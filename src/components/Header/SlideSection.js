import React, { Fragment } from 'react';
import Slider from "react-slick";
import CountDown from './CountDown';
import Fade from 'react-reveal/Fade';
import code from '../../assets/code.png'
import git from '../../assets/git.png'
import mobile from '../../assets/mobile.png'
import prog from '../../assets/prog.png'
import web from '../../assets/web.png'

const SlideSection = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true
    }
    return (
        <Fragment>
            <div className="Slider">
                <div className="Slider-container">
                    <Slider {...settings}>
                        <div className="Slider-item">
                            <img src={code} alt="undraw-code-img" />
                        </div>
                        <div className="Slider-item">
                            <img src={git} alt="undraw-git-img" />
                        </div>
                        <div className="Slider-item">
                            <img src={prog} alt="undraw-prog-img" />
                        </div>
                        <div className="Slider-item">
                            <img src={web} alt="undraw-web-img" />
                        </div>
                        <div className="Slider-item">
                            <img src={mobile} alt="undraw-mobile-img" />
                        </div>
                    </Slider>
                </div>
                <Fade left delay={3000} duration={1000}>
                    <CountDown />
                </Fade>
            </div>
        </Fragment>
    );
}

export default SlideSection;
