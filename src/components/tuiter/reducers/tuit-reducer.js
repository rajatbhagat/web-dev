import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'CREATE_TUIT':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },
                stats: {
                    retuits: 111,
                    likes: 222,
                    replies: 333
                }
            }
            return [newTuit,
                ...state];
        case 'DELETE_TUIT':
            state = state.filter(t => t._id !== action.tuit._id)
            return state;
        case 'LIKE_TUIT':
            state = state.map(t => {
                if (t._id === action.tuit._id) {
                    if (!t.liked ) {
                        t.liked = true;
                        t.stats.likes++;
                    } else {
                        t.liked = false;
                        t.stats.likes--;
                    }
                    return t;
                } else {
                    return t;
                }
            })
            return state;
        default:
            return tuits;
    }
}

export default tuitsReducer;