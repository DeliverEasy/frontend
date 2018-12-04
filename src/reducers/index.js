import {
    LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGIN_FAILURE, LOGOUT_SUCCESS,
    VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS,
    VERIFY_TOKEN_FAILURE, FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE
} from '../actions'

function authReducer(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            })
        case VERIFY_TOKEN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: true
            })
        case VERIFY_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true
            })
        case VERIFY_TOKEN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            })
            case FETCH_POSTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                posts: null
            })
        case FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                posts: action.posts
            })
        case FETCH_POSTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                posts: null,
                message: action.message
            })
        default:
            return state
    }
}

export default authReducer;