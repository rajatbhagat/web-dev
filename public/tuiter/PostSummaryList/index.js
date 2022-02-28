import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
    <div class="list-group wd-rounded-corners pt-3">
            ${
        posts.map(item => {
            return(PostSummaryItem(item))
        }).join('')
    }
    </div>
    `)
}

export default PostSummaryList;