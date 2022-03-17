import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";
import './postSummaryItem.css';

const PostSummaryList = () => {
    return(
        <div className="list-group wd-rounded-corners pt-3">
            {
                posts.map(item => {
                    return(
                        <PostSummaryItem post={item}/>
                    )
                })
            }
        </div>
    );
}

export default PostSummaryList;