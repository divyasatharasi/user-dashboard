import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { posts } from './posts.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    posts
});

export default rootReducer;