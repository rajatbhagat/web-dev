import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeScreenComponent from "./HomeScreenComponent.js";

(function ($) {
    $('#wd-homescreen').append(`
        <div class="row mt-2">
            <div class="wd-border-between-cols col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 col-xs-2 wd-padding-cols-0">
                ${NavigationSidebar()}
            </div>
            <div class="wd-border-between-cols col-11 col-xxl-7 col-xl-7 col-lg-7 col-md-9 col-sm-10 col-xs-10">
                <div>
                    ${HomeScreenComponent()}
                </div>
            </div>
        </div>
    `);
})($);
