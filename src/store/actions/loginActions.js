import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/range';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

export const loginUser = loginInfo => dispatch => {
    console.log(true)
}
