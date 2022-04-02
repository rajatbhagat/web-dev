// import tuits from "../data/tuits.json";
import {FIND_ALL_TUITS, DELETE_TUIT, CREATE_TUIT, UPDATE_TUIT} from "../actions/tuits-actions";


const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case CREATE_TUIT:
            // const newTuit = {
            //     tuit: action.tuit,
            //     _id: (new Date()).getTime() + '',
            //     postedBy: {
            //         "username": "Rajat Bhagat"
            //     },
            //     handle: "rajatbhagat",
            //     logoImage: "/tuiter/images/profilePicture.png",
            //     stats: {
            //         retuits: 111,
            //         likes: 222,
            //         replies: 333
            //     }
            // }
            return [action.tuit, ...state];
        case DELETE_TUIT:
            state = state.filter(t => t._id !== action.tuit._id)
            return state;
        case UPDATE_TUIT:
            // console.log(action.tuit);
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                        action.tuit : tuit);
            // return state;
        default:
            return state;
    }
}

export default tuitsReducer;