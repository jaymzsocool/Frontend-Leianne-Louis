import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../store/actions'
import SignUpForm from '../components/SignUp/SignUpForm'

class SignUpFormView extends Component {
    state = {
        signUp: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            signUp: {
                [e.target.name]: e.target.value
            }
        })
    }

    signUp = e => {
        e.preventDefault();
        this.props.signUp()
    }
    render() {
        return (
            <SignUpForm handleChanges={this.handleChanges} signUp={this.signUp} />
        )
    }
} 

export default connect(null, { signUp })(SignUpFormView);