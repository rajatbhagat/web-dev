import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="wd-border-between-cols col-11 col-xxl-7 col-xl-7 col-lg-7 col-md-11 col-sm-11 col-xs-11 wd-padding-cols-0">
            <div>
                <div class="d-inline-flex wd-occupy-all-width">
                    <div class="wd-group-input-icon" style="margin-left: 20px">
                        <i class="fa fa-search wd-icon-inside wd-search-bar-icon-color"></i>
                        <input class="form-control wd-rounded-corners-search wd-fill-width-search-bar wd-dark-gray-color wd-center-section-border"
                               placeholder="Search Tuiter" type="search"/>
                    </div>
                    <div>
                        <i class="fa fa-cog float-end wd-icon-size text-white"
                           style="margin-right: 20px"></i>
                    </div>
                </div>
                <div>
                    <ul class="nav nav-pills nav-justified wd-padding-top">
                        <li class="nav-item wd-border-bottom-links wd-tabs-links">
                            <a class="nav-link text-white" href="#"><strong>For You</strong></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link wd-tabs-links" href="#"><strong>Trending</strong></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link wd-tabs-links" href="#"><strong>News</strong></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link wd-tabs-links" href="#"><strong>Sports</strong></a>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link wd-tabs-links"
                               href="#"><strong>Entertainment</strong></a>
                        </li>
                    </ul>
                </div>
                <div class="wd-center-post-section">
                    <div class="wd-center-img-container">
                        <img class="wd-occupy-all-width" src="../images/spacexpic.jpeg"/>
                        <strong><p class="wd-txt-over-img">
                            SpaceX's Starship
                        </p></strong>
                    </div>
                    ${PostSummaryList()}
                </div>
            </div>
        </div>
    `)
}

export default ExploreComponent;