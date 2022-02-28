const PostSummaryItem = (post) => {
    return(`
        <div class="row wd-occupy-all-width">
            <div class="col-9 col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-md-9">
                <div class="row">
                    <p class="wd-post-topic wd-font-color-light-gray">${post.topic}</p>
                </div>
                <div class="row">
                    <strong><p class="wd-post-topic text-white">${post.userName} <i
                            class="fa fa-check-circle"></i> <span class="wd-font-color-light-gray"> ${post.time}</span></p></strong>
                </div>
                <div class="row">
                    <strong><p class="wd-post-description text-white">${post.title}</p></strong>
                </div>
                <div class="row">
                    <p class="wd-post-topic wd-font-color-light-gray">${post.tweets}</p>
                </div>
            </div>
            <div class="col-3 col-xxl-3 col-xl-3 col-lg-3 col-sm-3 col-md-3">
                <div class="wd-post-small-img-container">
                    <img class="wd-post-small-img"
                         src="${post.image}"/>
                </div>
            </div>
        </div>
    `)

}

export default PostSummaryItem;