import React, { Component } from 'react';
import style from "./Header.module.scss";
import {Link} from "react-router-dom";

import imageLogo from "../image/logo.jpg";

class Header extends Component {
    render() {
        return (
            <div className={style.navbar}>
                <div>
                    <img src={imageLogo} alt="logo image" />
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">Aboute Us</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;