import React, { Component } from 'react';
import style from "./Banner.module.scss";

import bannerImage from "../image/banner-image.jpg";

class Banner extends Component {
    render() {
        return (
            <div className={style.banner}>
                <img src={bannerImage} alt="banner image" />
                <div>
                    <h2>Alireza</h2>
                    <p>I learning <span>React.js</span> </p>
                </div>
            </div>
        );
    }
}

export default Banner;