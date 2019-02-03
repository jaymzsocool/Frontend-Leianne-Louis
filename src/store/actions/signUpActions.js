import axios from 'axios';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const signUp = signUpInfo => dispatch => {
    dispatch({ type: SIGN_UP_START });
    console.log('sign up connected')
}