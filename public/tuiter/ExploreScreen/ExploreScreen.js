import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class=" col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 col-xs-2 ">
                ${NavigationSidebar('Explore')}
            </div>
            <div class=" col-11 col-xxl-7 col-xl-7 col-lg-7 col-md-9 col-sm-10 col-xs-10 wd-padding-cols-0">
                <div>
                    ${ExploreComponent()}
                </div>
            </div>
            <div class="col col-xxl-3 col-xl-3 col-lg-3 d-none d-lg-block">
                ${WhoToFollowList()}   
            </div>
        </div>
    `);
})($);
