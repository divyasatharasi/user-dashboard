import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [errMessage, setErrMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const location = useLocation();

    // eslint-disable-next-line
    useEffect(() => { 
        dispatch(userActions.getUsers()); 
        dispatch(userActions.getPosts());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!validateEmail()) {
            setErrMessage('Please enter valid email address.');
        } else {
            setSubmitted(true);
            setErrMessage('');
            if (username && password && username === password) {
                const { from } = location.state || { from: { pathname: "/home" } };
                let index = users.findIndex(user => user.email === username)
                if(index > -1) {
                    dispatch(userActions.login(username, users[index], from));
                }
            } else {
                setErrMessage('Please enter valid email address and password.');
            }
        }
        console.log(errMessage);
    }

    function validateEmail() {
        if (typeof inputs.username !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (pattern.test(inputs.username)) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                </div>
                <div className="form-group">
                    {submitted && errMessage &&
                        <div style={{color: 'red'}} className="invalid-feedback">{errMessage}</div>
                    }
                </div>
            </form>
        </div>
    );
}

export { LoginPage };