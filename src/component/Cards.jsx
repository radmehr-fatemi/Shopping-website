import React, { Component } from 'react';

import style from "./Cards.module.scss";

import Card from './Card';

import cardImage1 from "../image/game-1.jpg";
import cardImage2 from "../image/game-2.jpg";
import cardImage3 from "../image/game-3.jpg";
import cardImage4 from "../image/game-4.jpg";

class Cards extends Component {
    gamesInformation = [
        {id:"gamesInformation1" ,name:"Assasins creed" ,photo:cardImage1 ,cost:"20 $" },
        {id:"gamesInformation2" ,name:"Mortal combat-11" ,photo:cardImage2 ,cost: "35 $"},
        {id:"gamesInformation3" ,name:"PES 2020" ,photo:cardImage3 ,cost: "30 $"},
        {id:"gamesInformation4" ,name:"Witcher" ,photo:cardImage4 ,cost: "27 $"},
    ]
    render() {
        return (
            <div className={style.cards}>
                {this.gamesInformation.map(game => 
                <Card 
                key={game.id} 
                id={game.id} 
                name={game.name} 
                photo={game.photo} 
                cost={game.cost}
                 />)}     
            </div>
        );
    }
}

export default Cards;