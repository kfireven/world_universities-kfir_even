const initialState = {
    universities: []
}

export const universities = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_UNIVERSITY_LIST':
            return Object.assign({}, state, { universities: action.universities });
        default:
            return state;
    }
};