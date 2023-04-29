export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_SUCCESS';

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};
