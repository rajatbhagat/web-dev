import React from 'react';
import './tuits.css'

const TuitContentDetails = ({tuit}) => {
    if (tuit.attachments !== undefined) {
        if (tuit.attachments.image !== undefined) {
            return(
                <img className="wd-home-screen-post-img" src={window.location.origin + tuit.attachments.image}/>
            );
        }
        if (tuit.attachments.video !== undefined) {
            return(
                <iframe className="rounded-2" width="560" height="315"
                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            );
        }
    }
    return (<></>);
}

export default TuitContentDetails