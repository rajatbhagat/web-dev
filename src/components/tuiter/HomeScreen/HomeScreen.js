import NavigationSidebar from "../navigationsidebar/index.js";
import HomeScreenComponent from "./HomeScreenComponent.js";
import homePost from "./homePost.json";
import PostSummaryList from "../PostSummaryList/index.js";
import './homescreen.css';

const HomeScreen = () => {
    return (
        <div className="row">
            <div
                className="wd-border-between-cols col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                <div className="mt-3">
                    <NavigationSidebar who={'home'}/>
                </div>
            </div>
            <div
                className="wd-border-between-cols col-xxl-7 col-xl-7 col-lg-7 col-md-9 col-sm-9 col-xs-9">
                {
                    homePost.map(singlePost => {
                        return (
                            <HomeScreenComponent post={singlePost}/>
                        )
                    })
                }
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="mt-3">
                    <PostSummaryList />
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
