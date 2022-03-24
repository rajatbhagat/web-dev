import profile from '../data/profile.json'

const ProfileReducer = (state = profile, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ProfileReducer;