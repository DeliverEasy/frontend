export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const BASE_URL = 'http://127.0.0.1:8000/api/v1';

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: user.token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export default function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`
    }

    return dispatch => {
        dispatch(requestLogin(creds))

        return fetch(BASE_URL + '/token-auth/', config)
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {
                if (!response.ok) {
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else {
                    localStorage.setItem('token', user.token)
                    dispatch(receiveLogin(user))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('token')
        dispatch(receiveLogout())
    }
}

export const VERIFY_TOKEN_REQUEST = 'VERIFY_TOKEN_REQUEST';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE';

function requestVerifyToken() {
    return {
        type: VERIFY_TOKEN_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveVerifyTokenSuccess() {
    return {
        type: VERIFY_TOKEN_SUCCESS,
        isFetching: false,
        isAuthenticated: true
    }
}

function verifyError(message) {
    return {
        type: VERIFY_TOKEN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function verifyToken(token) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'token': token })
    }

    return dispatch => {

        dispatch(requestVerifyToken);

        return fetch(BASE_URL + '/token-verify/', config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                if (!response.ok) {
                    dispatch(verifyError(json.non_field_errors[0]))
                    return Promise.reject(json)
                } else {
                    dispatch(receiveVerifyTokenSuccess())
                }
            }).catch(err => console.log("Error: ", err))
    }
}

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

function requestFetchPosts() {
    return {
        type: FETCH_POSTS_REQUEST,
        isFetching: true,
        posts: null
    }
}

function receiveFetchPosts(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        isFetching: false,
        posts: posts
    }
}

function fetchPostsError(message) {
    return {
        type: FETCH_POSTS_FAILURE,
        isFetching: false,
        posts: null,
        message
    }
}

export function fetchPosts() {

    let config = {
        method: 'GET',
    }

    return dispatch => {

        dispatch(requestFetchPosts);

        return fetch(BASE_URL + '/post/list/', config)
            .then(response =>
                response.json().then(json => ({ json, response }))
            ).then(({ json, response }) => {
                if (!response.ok) {
                    dispatch(fetchPostsError(json.non_field_errors[0]))
                    return Promise.reject(json)
                } else {
                    console.log(json)
                    dispatch(receiveFetchPosts(json))
                }
            }).catch(err => console.log("Error: ", err))
    }
}