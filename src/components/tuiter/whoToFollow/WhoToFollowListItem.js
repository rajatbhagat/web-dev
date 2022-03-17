import './whoToFollow.css';

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }
                            ) => {
    // TODO: The images path is not being resolved
    return (
        <span className="list-group-item wd-dark-gray-color">
            <div className="row">
                <div className="col col-xxl-2 col-xl-3 col-lg-3">
                    <img className="wd-follow-img" src={who.avatarIcon}/>
                </div>
                <div className="col col-xxl-6 col-xl-5 col-lg-5 float-start">
                    <div className="row">
                        <strong>
                            <p className="wd-zero-margin wd-follow-topic text-white">{who.userName} <i
                                    className="fa fa-check-circle"/></p>
                        </strong>
                    </div>
                    <div className="row">
                        <p className="wd-handle-text text-white text-muted">@{who.handle}</p>
                    </div>
                </div>
                <div className="col col-xxl-4 col-xl-4 col-lg-4">
                    <button className=" btn align-content-center float-end wd-follow-btn bg-white">
                        <strong className="text-black float-start">Follow</strong>
                    </button>
                </div>
            </div>
        </span>
    );
};

export default WhoToFollowListItem;