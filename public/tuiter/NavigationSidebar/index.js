const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
            <a class="list-group-item list-group-item-action bg-black">
                    <i class="fa fa-home float-start wd-padding-top wd-right-padding text-white"></i>
                    <span class="d-none d-lg-block text-white">Home</span></a>
                <a class="list-group-item list-group-item-action active bg-black">
                    <i class="fa fa-hashtag float-start wd-padding-top wd-right-padding text-white"></i>
                    <strong><span class="d-none d-lg-block text-white">Explore</span></strong></a>
                <a class="list-group-item list-group-item-action bg-black">
                    <i class="fa fa-bell float-start wd-padding-top wd-right-padding text-white"></i>
                    <span class="d-none d-lg-block text-white">Notifications</span></a>
                <a class="list-group-item list-group-item-action bg-black">
                    <i class="fa fa-envelope float-start wd-padding-top wd-right-padding text-white"></i>
                    <span class="d-none d-lg-block text-white">Messages</span></a>
                <a class="list-group-item list-group-item-action bg-black">
                    <i class="fa fa-bookmark float-start wd-padding-top wd-right-padding text-white"></i>
                    <span class="d-none d-lg-block text-white">Bookmarks</span></a>
                <a class="list-group-item list-group-item-action bg-black">
                    <i class="fa fa-list float-start wd-padding-top wd-right-padding text-white"></i>
                    <span class="d-none d-lg-block text-white">List</span></a>
                <a class="list-group-item list-group-item-action bg-black">
                    <i class="fa fa-user float-start wd-padding-top wd-right-padding text-white"></i>
                    <span class="d-none d-lg-block text-white">Profile</span></a>
                <a class="list-group-item list-group-item-action bg-black">
                    <span class="fa-stack fa-1x float-start wd-negative-margin-more-icon">
                        <i class="fas fa-circle fa-stack-1x float-start wd-more-icon-size text-white"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                    </span> <span class="d-none d-lg-block text-white">More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

