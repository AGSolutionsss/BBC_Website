import { SET_USER_ID } from "../actions/userActions";
const initialState = {
    user_id : null,
};

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ID:
            return {
                ...state,
                user_id: action.payload.user_id,
            };
        
        default:
            return state;
    }
};