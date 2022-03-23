import {Outlet} from "react-router-dom";
import NavigationSidebar from "./navigationsidebar";
// import "./tuiter.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import WhoToFollowList from "./whoToFollow/WhoToFollowList";

const store = createStore(whoReducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet />
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
};
export default Tuiter;