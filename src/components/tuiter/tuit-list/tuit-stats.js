import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div id="icons-for-tuiter"
             className="wd-icons-for-tuiter row mb-4 mt-2">
            <div className="wd-single-icon col">
                                <span>
                                    <i className="far fa-comment text-white"/>
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.comments}</span>

            </div>
            <div className="wd-single-icon col">
                                <span>
                                    <i className="fa fa-retweet text-white"/>
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.retuits}</span>

            </div>
            <div className="wd-single-icon col" onClick={() => {
                const newTuit = tuit;
                if (tuit.liked) {
                    newTuit.liked = false;
                    newTuit.stats.likes = newTuit.stats.likes - 1
                } else {
                    newTuit.liked = true
                    newTuit.stats.likes = newTuit.stats.likes + 1
                }
                // console.log(newTuit);
                updateTuit(dispatch, newTuit)
            }}>
                                <span>
                                    { tuit.liked ? <i className="far fa-thumbs-up ms-2" style={{color: 'red'}} aria-hidden="true"/> :
                                      <i className="far fa-thumbs-up ms-2 text-white " aria-hidden="true"/>}
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.likes}</span>

            </div>
            <div className="wd-single-icon col" onClick={() => {
                const newTuit = tuit;
                if (tuit.disliked) {
                    newTuit.disliked = false;
                    newTuit.stats.dislikes = newTuit.stats.dislikes + 1
                } else {
                    newTuit.disliked = true
                    newTuit.stats.dislikes = newTuit.stats.dislikes - 1
                }
                // console.log(newTuit);
                updateTuit(dispatch, newTuit)
            }}>
                                <span>
                                    { tuit.disliked ? <i className="far fa-thumbs-down ms-2" style={{color: 'blue'}} aria-hidden="true"/> :
                                      <i className="far fa-thumbs-down ms-2 text-white " aria-hidden="true"/>}
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.dislikes}</span>

            </div>
            <div className="col ">
                                <span>
                                    <i className="fa fa-upload text-white"/>
                                </span>

            </div>
        </div>
    );
}

export default TuitStats;