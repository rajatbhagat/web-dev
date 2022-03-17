import './homescreen.css';

const HomeScreenComponent = ({post}) => {
    return (
        <>
        <div className="row wd-row-style mt-3" >
            <div className="col-1 col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-sm-2">
                <img src={window.location.origin + post.postAuthorImage} alt="profile_pic" className="wd-follow-img"/>
            </div>
            <div className="col-11 col-xxl-11 col-xl-11 col-lg-10 col-md-10 col-sm-10">
                <div className="row mb-2">
                    <div className="float-start">
                        <span ><strong className="text-white">{post.postAuthor} <i className="fa fa-check-circle"/></strong>
                        <small className="text-muted">{post.postHandle}</small><small className="text-muted"> . {post.postTime}</small></span>
                    </div>
                </div>
                <div className="row text-white mb-2">
                    <span>{post.postTopic}</span>
                </div>
                <div className="row" >
                    <div>
                        <div className="wd-post-author-name-style">
                            <img className="wd-home-screen-post-img" src={window.location.origin + post.postImage}/>
                            { post.postDescriptionHeading ?
                               <>
                                    <div className="mt-2">
                                        <span className="text-white p-4 mt-2">{post.postDescriptionHeading}</span>
                                    </div>
                                    <div className="mb-2 mt-1">
                                        <span className="text-muted p-4">{post.postDescriptionContent}</span>
                                    </div>
                               </> :  null}
                        </div>
                        <div id="icons-for-tuiter" className="wd-icons-for-tuiter row mb-4 mt-2">
                            <div className="wd-single-icon col-3">
                                <span>
                                    <i className="fa fa-light fa-comment wd-icon-color"/>
                                </span>
                                    <span className="wd-icon-values-style text-muted wd-tuiter-icon-margin"> {post.postComment}</span>

                            </div>
                            <div className="wd-single-icon col-3">
                                <span>
                                    <i className="fa fa-light fa-retweet wd-icon-color"/>
                                </span>
                                    <span className="wd-icon-values-style text-muted wd-tuiter-icon-margin"> {post.postRetweet}</span>

                            </div>
                            <div className="wd-single-icon col-3">
                                <span>
                                    <i className="fa fa-light fa-heart wd-icon-color"/>
                                </span>
                                    <span className="wd-icon-values-style text-muted wd-tuiter-icon-margin"> {post.postLike}</span>

                            </div>
                            <div className="col-3 ">
                                <span>
                                    <i className="fa fa-light fa-upload wd-icon-color"/>
                                </span>

                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
}

export default HomeScreenComponent;