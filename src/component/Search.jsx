import React, { Component } from 'react';

import style from "./Search.module.scss";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"---",
        }
        this.searchInput = React.createRef();
    }
    
    
    updateText = e => {
        this.setState({
            text: e.target.value
        })
    }

    componentDidMount() {
        // this.searchInput.current.focus()
    }
    
    render() {
        const {text} = this.state;
    return (
        <div className={style.search}>
            <div>
                <h1>Search what you want</h1>
            </div>
            <div>
                <input ref={this.searchInput} type="text" onChange={this.updateText}  placeholder='Search...'/>
                <p>{text}</p>
            </div>
        </div>
    );
    }
}

export default Search;