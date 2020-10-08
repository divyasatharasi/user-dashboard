import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UsersPage } from '../UsersPage';
import { BlogsPage } from '../BlogsPage';
import { BlogsPost } from '../BlogsPost';

const routes = [
    {
      path: "/home/users",
      component: UsersPage
    },
    {
      path: "/home/blogs",
      component: BlogsPage
    },
    {
        path: "/home/blogs/:blogId",
        component: BlogsPost
    }
  ];

function HomePage() {
    const user = useSelector(state => state.authentication.user);

    function RouteWithSubRoutes(route) {
        return (
          <Route
            path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        );
      }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-between" }}>
            <h1>Hi {user.name}!</h1>
                <div style={{fontSize:26}}>
                    <Link to="/login">Logout</Link>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <div>
                    <div>
                        <Link to="/home/users">Users</Link>
                    </div>
                    <div>
                        <Link to="/home/blogs">Blogs</Link>
                    </div>
                </div>
                <div style={{paddingLeft: '3%'}}>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export { HomePage };