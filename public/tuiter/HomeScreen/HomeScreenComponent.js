const HomeScreenComponent = () => {
    return (`
        <div class="row wd-row-style" >
            <div class="col-1 col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-sm-2">
                <img src="../images/nasalogo.jpg" alt="profile_pic" class="wd-follow-img">
            </div>
            <div class="col-11 col-xxl-11 col-xl-11 col-lg-10 col-md-10 col-sm-10">
                <div class="row mb-2">
                    <div class="float-start">
                        <span ><strong class="text-white">NASA Web Telescope<i class="fa fa-check-circle"></i></strong>
                        <small class="text-muted">@nasaweb</small><small class="text-muted"> . 23h</small></span>
                    </div>
                </div>
                <div class="row text-white mb-2">
                    <span>NASA Web Telescope Launched</span>                
                </div>
                <div class="row" >
                    <div>
                        <div class="wd-post-author-name-style">
                            <img class="wd-home-screen-post-img" src="../images/nasawebtelescope.webp"> 
                            <div class="mt-2">
                                <span class="text-white p-4 mt-2">NASA's James Web Telescope has been launched!!</span>
                            </div>
                            <div class="mb-2 mt-1">
                                <span class="text-muted p-4">From training to launch to unfolding the telescope, find all your information here </span>
                            </div>                
                        </div>
                        <div id="icons-for-tuiter" class="wd-icons-for-tuiter row mb-4 mt-2">
                            <div class="wd-single-icon col-3">
                                <span class="iconify" data-icon="bx:bx-message-rounded" style="color: #2f3336;" data-width="25"
                                        data-height="25"><span class="wd-icon-values-style text-muted"> 34K</span></span>
                                
                            </div>
                            <div class="wd-single-icon col-3">
                                <span class="iconify" data-icon="system-uicons:retweet" style="color: #2f3336;" data-width="25"
                                        data-height="25"></span><span class="wd-icon-values-style text-muted"> 56K</span>
                                
                            </div>
                            <div class="wd-single-icon col-3">
                                <span class="iconify" data-icon="icon-park-outline:like" style="color: #2f3336;" data-width="25"
                                        data-height="25"></span><span class="wd-icon-values-style-like text-muted"> 10.5K</span>
                                
                            </div>
                            <div class="col-3 ">
                                <span class="iconify" data-icon="akar-icons:share-box" style="color: #2f3336;" data-width="25"
                                        data-height="25"></span>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="row mt-3" style="margin-left: 5px: border-bottom: 1px solid white">
            <div class="col-1 col-xxl-1 col-xl-1 col-lg-2 col-md-2 col-sm-2">
                <img src="../images/teslalogo.png" alt="profile_pic" class="wd-follow-img">
            </div>
            <div class="col-11 col-xxl-11 col-xl-11 col-lg-10 col-md-10 col-sm-10">
                <div class="row mb-2">
                    <div class="float-start">
                        <span ><strong class="text-white">Tesla Model S Plaid<i class="fa fa-check-circle"></i></strong>
                        <small class="text-muted">@teslamodels</small><small class="text-muted"> . 2h</small></span>
                    </div>
                </div>
                <div class="row text-white mb-2">
                    <span>Checkout the sleek new Model S Plaid</span>                
                </div>
                <div class="row" >
                    <div>
                        <div style="border: 1px solid; border-color : #4f5050; border-radius: 20px; width: 100%">
                            <img src="../images/teslacar.jpeg" 
                            style="border-bottom: 1px solid #4f5050; border-bottom-left-radius: 20px; border-bottom-right-radius:20px;border-top-left-radius: 20px; border-top-right-radius: 20px; width:100%;   height: 500px">
                        </div>
                        <div id="icons-for-tuiter" class="wd-icons-for-tuiter row mb-4 mt-2">
                            <div class="wd-single-icon col-3">
                                <span class="iconify" data-icon="bx:bx-message-rounded" style="color: #2f3336;" data-width="25"
                                        data-height="25"><span class="wd-icon-values-style text-muted"> 34K</span></span>
                                
                            </div>
                            <div class="wd-single-icon col-3">
                                <span class="iconify" data-icon="system-uicons:retweet" style="color: #2f3336;" data-width="25"
                                        data-height="25"></span><span class="wd-icon-values-style text-muted"> 56K</span>
                                
                            </div>
                            <div class="wd-single-icon col-3">
                                <span class="iconify" data-icon="icon-park-outline:like" style="color: #2f3336;" data-width="25"
                                        data-height="25"></span><span class="wd-icon-values-style-like text-muted">10.5K</span>
                                
                            </div>
                            <div class="col-3 ">
                                <span class="iconify" data-icon="akar-icons:share-box" style="color: #2f3336;" data-width="25"
                                        data-height="25"></span>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    `)
}

export default HomeScreenComponent