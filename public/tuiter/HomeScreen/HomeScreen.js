import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeScreenComponent from "./HomeScreenComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-homescreen').append(`
        <div class="row mt-4">
            <div class="wd-border-between-cols col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                ${NavigationSidebar('Home')}
            </div>
            <div class="wd-border-between-cols col-xxl-7 col-xl-7 col-lg-7 col-md-9 col-sm-9 col-xs-9">
                ${HomeScreenComponent()}
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
