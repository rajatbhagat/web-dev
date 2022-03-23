import React from 'react';
import TuitContentDetails from "./tuit-content-details";
import './tuits.css'

const TuitListItem = ({key, tuit}) => {
    let postRender = "";
    console.log(tuit)

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
                                <i className="fa fa-window-close text-white"/>
                            </div>
                        </div>
                    </div>
                    {/*<div className="row text-white mb-2">*/}
                    {/*    <span>{tuit.topic}</span>*/}
                    {/*</div>*/}
                    {/*{ tuit.title ?*/}

                    {/*    <div className="mt-2">*/}
                    {/*        <span className="text-white mt-2">{tuit.title}</span>*/}
                    {/*    </div> : null*/}
                    {/*}*/}
                    <div className="mb-2">
                        <span className="white">{tuit.tuit}</span>
                    </div>
                    <div className="row">
                        <div>
                            <div className="wd-post-author-name-style">
                                <TuitContentDetails tuit={tuit}/>
                            </div>
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
                                <div className="wd-single-icon col-3">
                                <span>
                                    <i className="far fa-heart text-white" aria-hidden="true"/>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TuitListItem;