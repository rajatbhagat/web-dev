import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div id="icons-for-tuiter"
             className="wd-icons-for-tuiter row mb-4 mt-2">
            <div className="wd-single-icon col-3">
                                <span>
                                    <i className="far fa-comment text-white"/>
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.comments}</span>

            </div>
            <div className="wd-single-icon col-3">
                                <span>
                                    <i className="fa fa-retweet text-white"/>
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.retuits}</span>

            </div>
            <div className="wd-single-icon col-3" onClick={() => {
                                                                const newTuit = tuit;
                                                                newTuit.stats.likes = newTuit.stats.likes + 1
                                                                updateTuit(dispatch, newTuit)
                                                            }}>
                                <span>
                                    { tuit.liked ? <i className="far fa-thumbs-up ms-2" style={{color: 'red'}} aria-hidden="true"/> :
                                      <i className="far fa-thumbs-up ms-2 text-white " aria-hidden="true"/>}
                                </span>
                <span
                    className="wd-icon-values-style wd-tuiter-icon-margin"> {tuit.stats.likes}</span>

            </div>
            <div className="col-3 ">
                                <span>
                                    <i className="fa fa-upload text-white"/>
                                </span>

            </div>
        </div>
    );
}

export default TuitStats;