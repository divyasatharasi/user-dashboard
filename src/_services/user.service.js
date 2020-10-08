import {config} from '../config';
import { authHeader } from '../_helpers';

export const userService = {
    getUsers,
    logout,
    getPosts,
    getById
};
const apiUrl = JSON.parse(config.config).apiUrl;
function getUsers() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    
    return fetch(`${apiUrl}/users`, requestOptions)
        .then(handleResponse)
}
function getPosts() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${apiUrl}/posts`, requestOptions)
        .then(handleResponse)
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}