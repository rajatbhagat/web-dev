const HomeScreenComponent = (post) => {
    return (`
        <div class="row wd-row-style mt-3" >
            <div class="col-1 col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-sm-2">
                <img src="${post.postAuthorImage}" alt="profile_pic" class="wd-follow-img">
            </div>
            <div class="col-11 col-xxl-11 col-xl-11 col-lg-10 col-md-10 col-sm-10">
                <div class="row mb-2">
                    <div class="float-start">
                        <span ><strong class="text-white">${post.postAuthor} <i class="fa fa-check-circle"></i></strong>
                        <small class="text-muted">${post.postHandle}</small><small class="text-muted"> . ${post.postTime}</small></span>
                    </div>
                </div>
                <div class="row text-white mb-2">
                    <span>${post.postTopic}</span>                
                </div>
                <div class="row" >
                    <div>
                        <div class="wd-post-author-name-style">
                            <img class="wd-home-screen-post-img" src="${post.postImage}">
                            ${ post.postDescriptionHeading ? `
                            <div class="mt-2">
                                <span class="text-white p-4 mt-2">${post.postDescriptionHeading}</span>
                            </div>
                            <div class="mb-2 mt-1">
                                <span class="text-muted p-4">${post.postDescriptionContent}</span>
                            </div>` : ``}               
                        </div>
                        <div id="icons-for-tuiter" class="wd-icons-for-tuiter row mb-4 mt-2">
                            <div class="wd-single-icon col-3">
                                <span>
                                    <i class="fa fa-light fa-comment wd-icon-color"></i>
                                </span>
                                    <span class="wd-icon-values-style text-muted wd-tuiter-icon-margin"> ${post.postComment}</span>
                                
                            </div>
                            <div class="wd-single-icon col-3">
                                <span>
                                    <i class="fa fa-light fa-retweet wd-icon-color"></i>
                                </span>
                                    <span class="wd-icon-values-style text-muted wd-tuiter-icon-margin"> ${post.postRetweet}</span>
                                
                            </div>
                            <div class="wd-single-icon col-3">
                                <span>
                                    <i class="fa fa-light fa-heart wd-icon-color"></i>
                                </span>
                                    <span class="wd-icon-values-style text-muted wd-tuiter-icon-margin"> ${post.postLike}</span>
                                
                            </div>
                            <div class="col-3 ">
                                <span>
                                    <i class="fa fa-light fa-upload wd-icon-color"></i>
                                </span>
                                    
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    `)
}

export default HomeScreenComponent