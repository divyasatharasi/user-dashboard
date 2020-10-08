import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
    getUsers,
    login,
    getPosts,
    logout,
};
function getUsers() { 
    return dispatch => {
        dispatch(request());

        userService.getUsers()
            .then(
                users => { 
                    dispatch(success(users));
                },
                error => {
                    console.log(error.toString());
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: userConstants.GET_USERS_REQUEST } }
    function success(users) { return { type: userConstants.GET_USERS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_USERS_FAILURE, error } }
}

function getPosts() { 
    return dispatch => {
        dispatch(request());

        userService.getPosts()
            .then(
                posts => { 
                    dispatch(success(posts));
                },
                error => {
                    console.log(error.toString());
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: userConstants.GET_POSTS_REQUEST } }
    function success(posts) { return { type: userConstants.GET_POSTS_SUCCESS, posts } }
    function failure(error) { return { type: userConstants.GET_POSTS_FAILURE, error } }
}
function login(username, user, from) {
    return dispatch => {
        // dispatch(request({ username }));
        dispatch(success(user));
        history.push(from);
    };

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
