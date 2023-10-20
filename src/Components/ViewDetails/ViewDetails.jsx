import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {

    const loadData=useLoaderData()

    const {_id}=useParams()
 const idInt=parseInt(_id);
    const data=loadData.filter(data=>data.id=== idInt)
    console.log(data)
    return (
        <div>
            <h2>Car Brand:{loadData.length}</h2>
            <img src={loadData.photo} alt=""/>
        </div>
    );
};

export default ViewDetails;