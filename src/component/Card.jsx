import React, { Component } from 'react';
// import PropTypes from "prop-types";
import style from "./Card.module.scss";
import { Link } from 'react-router-dom';

import arrowDown from "../image/arrow-down.svg";
import arrowUp from "../image/arrow-up.svg";

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
        }
    }

    downHandler = () => {
        if (this.state.number > 0) {
            this.setState(prevState => ({
                number: prevState.number - 1
            }))
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            number: prevState.number + 1
        }))
    }
    render() {
        const { name, photo, cost ,id } = this.props;
        const { number } = this.state;

        return (
            <div className={style.card}>
                <img src={photo} alt="game photp" />
                <div className={style.costName}>
                    <h3><Link to={`/product/${id}`} >{name}</Link></h3>
                    <p>{cost} {this.state.number > 0 ? `* ${number} = ${cost.split(" ")[0] * number}$` : null}</p>

                <div className={style.costDiv}>
                    <img onClick={this.downHandler} className={number <= 0 ? `${style.downDown}` : null} src={arrowDown} alt="arrow svg" />
                    <span>{this.state.number}</span>
                    <img onClick={this.upHandler} src={arrowUp} alt="arrow svg" />
                </div>
                </div>
            </div>
        );
    }
}

// Card.prototypes = {
//     cost:PropTypes.number,
// }

export default Card;