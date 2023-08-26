import React, { Component } from 'react';

import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Support from './Support';

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Support />
            </div>
        );
    }
}

export default Landing;