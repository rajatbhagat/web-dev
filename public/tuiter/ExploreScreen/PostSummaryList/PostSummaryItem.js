const PostSummaryItem = (post) => {
    return(`
        <div class="row wd-occupy-all-width">
            <div class="col-10 col-xxl-10 col-xl-10 col-lg-10 col-sm-10 col-md-10">
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
            </div>
            <div class="col-2 col-xxl-2 col-xl-2 col-lg-2 col-sm-2 col-md-2">
                <div class="wd-post-small-img-container">
                    <img class="wd-post-small-img"
                         src="${post.image}"/>
                </div>
            </div>
        </div>
    `)

}

export default PostSummaryItem;