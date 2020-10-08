import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { BlogsPost } from '../BlogsPost';

function App() {
    return (
        <div className="jumbotron">
            <div>
                <div>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={LoginPage} />
                            <Route exact path="/user_dashboard" component={LoginPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/home" component={HomePage} />
                            <Route path="/blogs/:blogId" component={BlogsPost} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };