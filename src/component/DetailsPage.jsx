import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = (props) => {
    const params = useParams();
    console.log(props)
    return (
        <div>
            <h1>Product #{params.id }</h1>            
        </div>
    );
};

export default DetailsPage;