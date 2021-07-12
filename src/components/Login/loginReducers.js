const initialState = {
    name: ''
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return Object.assign({}, state, { name: action.name });
        default:
            return state;
    }
};