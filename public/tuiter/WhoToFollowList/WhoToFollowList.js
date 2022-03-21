import rightSideBarWhoToFollow from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (
        `<div class="list-group wd-rounded-corners">
            <span class="list-group-item wd-dark-gray-color">
                <strong class="text-white">Who To Follow</strong>
            </span>
            ${
                rightSideBarWhoToFollow.map(followItem => {
                    return(WhoToFollowListItem(followItem));
                }).join('')
            }
            <span class="list-group-item wd-dark-gray-color">
                <strong class="wd-show-more-text">Show More</strong>
            </span>
        </div>`
    )
}

export default WhoToFollowList;