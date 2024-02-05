
export const SET_USER_ID = 'SET_USER_ID';

export const setUser = (user_id) => ({
    type: SET_USER_ID,
    payload: user_id,
});