import { userConstants } from '../_constants';

export function posts(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_POSTS_REQUEST:
            return {
                loading: true
            };
        case userConstants.GET_POSTS_SUCCESS:
            return {
                posts: action.posts
            };
        case userConstants.GET_POSTS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}