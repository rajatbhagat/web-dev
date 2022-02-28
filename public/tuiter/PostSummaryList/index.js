import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
    <div class="list-group wd-rounded-corners" style="padding-top: 5px">
            ${
        posts.map(item => {
            return(PostSummaryItem(item))
        }).join('')
    }
    </div>
    `)
}

export default PostSummaryList;