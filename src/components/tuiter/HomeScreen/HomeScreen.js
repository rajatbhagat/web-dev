import HomeScreenComponent from "./HomeScreenComponent.js";
import homePost from "./homePost.json";
import './homescreen.css';

const HomeScreen = () => {
    return (
        <div>
            <ul className="list-group-item">
            {
                homePost.map(singlePost => {
                    return (
                        <HomeScreenComponent post={singlePost}/>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default HomeScreen;
