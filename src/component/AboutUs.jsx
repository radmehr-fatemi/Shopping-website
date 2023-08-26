import React from 'react';
import style from "./AbouteUs.module.scss";
import { Link, useNavigate, Routes, Route ,Outlet } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    const goHandler = () => {
        navigate(-1)
    }
    return (
        <div className={style.abouteUs}>
            <h1>I'm Alireza </h1>
            <br />
            <h2>I'm a programmer</h2>
            <br />
            <ul>
                <li><Link to="programmer">Programmer</Link></li>
                <li><Link to="drivers">Drivers</Link></li>
            </ul>
            <br />
            <div>

            </div>
                <Outlet />
            <br />
            <button onClick={goHandler}>Go</button>
        </div>
    );
};

export default AboutUs;