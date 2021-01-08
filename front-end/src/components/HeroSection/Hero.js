import React, { Component } from 'react';
import HomeSlider from "../Plugins/HomeSlider";

class HeroSection extends Component {
    state = {
        video: "jjijji",
        slider_data: [
            {
                img_path : "/img/Hero/15.jpg",
                title : "Transparency",
                description : "Time Management Platform making life at work easier and more productive"
            },
            {
                img_path : "/img/Hero/3.jpg",
                title : "Communication",
                description : "Time Management Platform making life at work easier and more productive"
            },
            {
                img_path : "/img/Hero/18.jpg",
                title : "Flexibility",
                description : "Time Management Platform making life at work easier and more productive"
            },
            {
                img_path : "/img/Hero/1.jpg",
                title : "Optimization",
                description : "Time Management Platform making life at work easier and more productive"
            }
        ]
    }
    render() {
        return (
            <>
                <section id="home" className="section welcome-area bg-overlay d-flex align-items-center overflow-hidden">
                    <a href="#features" className="scrollDown scroll"><span></span></a>
                    <HomeSlider slides={this.state.slider_data} video={this.state.video} />
                </section>
            </>
        );
    }
}

export default HeroSection;