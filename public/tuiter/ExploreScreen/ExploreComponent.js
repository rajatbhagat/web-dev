import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
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
            <ul class="nav nav-tabs wd-padding-top">
                <li class="nav-item">
                    <a class="nav-link active text-white" href="#"><strong>For You</strong></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " href="#"><strong>Trending</strong></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " href="#"><strong>News</strong></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " href="#"><strong>Sports</strong></a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link "
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
    `)
}

export default ExploreComponent;