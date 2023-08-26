import React, { Component } from 'react';
import axios from 'axios';
import style from "./Products.module.scss";

import Card from './Card';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products/")
            .then(response => this.setState({
                products:response.data
            }))
    }
    
    render() {
        const {products} = this.state;
        return (
            <div className={style.cards}>
                {
                    products.length?
                    products.map(product => <Card key={product.id} name={product.title} cost={`${product.price} $`} photo={product.image} />)
                    : <h1>Loading ...</h1>
                    
                }
            </div>
        );
    }
}

export default Products;