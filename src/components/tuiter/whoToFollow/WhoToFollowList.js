import whoToFollowList from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import './whoToFollow.css';

const WhoToFollowList = () => {
    return (
        <div className="list-group wd-rounded-corners">
            <span className="list-group-item wd-dark-gray-color">
                <strong className="text-white">Who To Follow</strong>
            </span>
            {
                whoToFollowList.map(followItem => {
                    return (
                        <WhoToFollowListItem who={followItem}/>
                    );
                })
            }
            <span className="list-group-item wd-dark-gray-color">
                <strong className="wd-show-more-text">Show More</strong>
            </span>
        </div>
    );
}

export default WhoToFollowList;