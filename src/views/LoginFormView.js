import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';

import LoginForm from '../components/Login/LoginForm';


class LoginFormView extends Component {
    state = {
        login: {
            email: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            login: {
                [e.target.name]: e.target.value
            }
        })
    }

    loginUser = e => {
        e.preventDefault()
        this.props.loginUser()
    }

    render() {
        return (
            <LoginForm loginUser={this.loginUser} handleChanges={this.handleChanges} login={this.state.login}/>
        )
    }
}


export default connect(null, { loginUser })(LoginFormView);