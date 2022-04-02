import React from 'react';
import TuitContentDetails from "./tuit-content-details";
import './tuits.css'
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../actions/tuits-actions.js";

const TuitListItem = ({key, tuit}) => {
    const dispatch = useDispatch();

    // const deleteTuit = (tuit) => {
    //     dispatch({
    //         type: 'DELETE_TUIT',
    //         tuit: tuit
    //     });
    // }

    return(
        <div className="list-group-item">
            <div className="row wd-row-style mt-3">
                <div className="col-1 col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-sm-2">
                    <img src={window.location.origin + tuit.logoImage} alt="profile_pic"
                         className="wd-follow-img"/>
                </div>
                <div className="col-11 col-xxl-11 col-xl-11 col-lg-10 col-md-10 col-sm-10">
                    <div className="row mb-2">
                        <div className="float-start">
                        <span><strong className="text-white">{tuit.postedBy.username} {tuit.verified ? <i
                            className="fa fa-check-circle"/>: ``}</strong>
                        <small className="text-muted"> @{tuit.handle}</small><small
                                className="text-muted"> . {tuit.time}</small></span>
                            <div className="float-end">
                                <i className="fa fa-window-close text-white" onClick={() => {deleteTuit(dispatch, tuit)}}/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <span className="white">{tuit.tuit}</span>
                    </div>
                    <div className="row">
                        <div>
                            <div className="wd-post-author-name-style">
                                <TuitContentDetails tuit={tuit}/>
                            </div>
                            <TuitStats tuit={tuit}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuitListItem;