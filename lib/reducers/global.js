import * as types from '../constants/ActionTypes';


const initialState = {
    list: {},
    loading: false
};


export default function global(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LOTTONUMS:
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_LOTTONUMS:
            return Object.assign({}, state, {
                loading: false,
                list: action.list
            });
        default:
            return state;
    }
}
