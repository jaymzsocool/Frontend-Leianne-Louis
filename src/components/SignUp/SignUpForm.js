import React from 'react';

const SignUpForm = props => {
    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={e => props.signUp(e)}>
                <input type='text' name='firstName' onChange={props.handleChanges} value={props.signUp.firstName} placeholder='Firstname'/>
                <input type='text' name='lastName' onChange={props.handleChanges}  value={props.signUp.lastName} placeholder='Lastname'/>
                <input type='text' name='email'  onChange={props.handleChanges}  value={props.signUp.email} placeholder='Email'/>
                <input type='text' name='password'  onChange={props.handleChanges}  value={props.signUp.password} placeholder='Password'/>
                <button>Next</button>
            </form>
        </>
    )
}

export default SignUpForm;