import React from 'react';

import style from "./Support.module.scss";

import image1 from "../image/Support1.png";
import image2 from "../image/Support2.png";
import image3 from "../image/Support3.png";

const Support = () => {
    return (
        <div className={style.support}>
            <div>
                <h2>Who support us?</h2>
            </div>
            <div>
            <img src={image1} alt="samsung logo" />
            <img src={image2} alt="aplle logo" />
            <img src={image3} alt="aplle logo" />
            </div>
        </div>
    );
};

export default Support;