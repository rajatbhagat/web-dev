import './postSummaryItem.css';

const PostSummaryItem = ({post}) => {
    return(
        <span className="list-group-item wd-dark-gray-color">
            <div className="row">
                <div className="col-9 col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-md-9">
                    <div className="row">
                        <p className="wd-post-topic wd-font-color-light-gray">{post.topic}</p>
                    </div>
                    <div className="row">
                        <strong><p className="wd-post-topic text-white">{post.userName} <i
                                className="fa fa-check-circle"/> <span className="wd-font-color-light-gray"> {post.time}</span></p></strong>
                    </div>
                    <div className="row">
                        <strong><p className="wd-post-description text-white">{post.title}</p></strong>
                    </div>
                    <div className="row">
                        <p className="wd-post-topic wd-font-color-light-gray">{post.tweets}</p>
                    </div>
                </div>
                <div className="col-3 col-xxl-3 col-xl-3 col-lg-3 col-sm-3 col-md-3">
                    <div className="wd-post-small-img-container">
                        <img className="wd-post-small-img"
                             src={window.location.origin + post.image}/>
                    </div>
                </div>
            </div>
        </span>
    );

}

export default PostSummaryItem;