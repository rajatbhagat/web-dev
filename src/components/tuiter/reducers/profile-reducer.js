import profile from '../data/profile.json'

const ProfileReducer = (state = profile, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE':
            state.map(data => {
                data.firstName = action.profile.firstName;
                data.lastName = action.profile.lastName;
                data.bio = action.profile.bio;
                data.location = action.profile.location;
                data.website = action.profile.website;
                data.dateOfBirth = action.profile.dateOfBirth;
            })
            return state;
        default:
            return state;
    }
}

export default ProfileReducer;