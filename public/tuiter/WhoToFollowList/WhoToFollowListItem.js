const WhoToFollowListItem = (who) => {
    return `
        <span class="list-group-item wd-dark-gray-color">
            <div class="row">
                <div class="col col-xxl-2 col-xl-3 col-lg-3">
                    <img class="wd-follow-img" src="${who.avatarIcon}"/>
                </div>
                <div class="col col-xxl-6 col-xl-5 col-lg-5 float-start">
                    <div class="row">
                        <strong>
                            <p class="wd-zero-margin wd-follow-topic text-white">${who.userName} <i
                                    class="fa fa-check-circle"></i></p>
                        </strong>
                    </div>
                    <div class="row">
                        <p class="wd-handle-text text-white text-muted">@${who.handle}</p>
                    </div>
                </div>
                <div class="col col-xxl-4 col-xl-4 col-lg-4">
                    <button class=" btn align-content-center float-end wd-follow-btn bg-white">
                        <strong class="text-black float-start">Follow</strong>
                    </button>
                </div>
            </div>
        </span>
    `;
};

export default WhoToFollowListItem;