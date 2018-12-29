import React, { Component } from 'react';
import { login } from './services/auth';
import "./LoginForm.css";
import {Link} from 'react-router-dom';
class LoginForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            email: '',
            password: ''
        };

        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    login = ( event ) => {
        //console.log(this.state)
        event.preventDefault();
        login( this.state )
            .then( data => this.props.history.push( '/Home' ) )
            .catch( error => alert( 'Invalid credentials' ) );
    }

    updateCredentials = () => {
        this.setState({
            email: this.emailInputRef.current.value,
            password: this.passwordInputRef.current.value
        });
    }

    render() {
        return (
            <div id="form-id">
                <h2 className="sign" style={{background: '#e6dede8f'}}>Sign In</h2>
                <hr className="line"/>
                <form onSubmit={this.login}>
                    <div className="form-group " >
                        <label htmlFor="email" className="control-label mail">Username or email*</label>
                        <input type="email" className="form-control" placeholder="" id="email" name="email" ref={this.emailInputRef} onChange={this.updateCredentials} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="password" className="control-label password">Password*</label>
                        <input type="password" className="form-control" placeholder="" id="password" name="password" ref={this.passwordInputRef} onChange={this.updateCredentials} />
                    </div>
                   <div className="checkbox">
                   <label>
                       <input type="checkbox" value="Remember me"/>Remember me
                   </label>
                   </div>
                    
                    <div className="form-group">
                        <button className="btn btn-primary signs">Sign In</button>
                        <Link to="#" className="forgot">Forgot password?</Link>
                    </div>
                    

                    <Link to="#" className="last">Need an account? sign in now</Link>
                </form>
            </div>
            
            // <div>
            //     <Footer className="font-small pt-4 mt-4">
                
            //     <div className="footer-copyright text-center py-3">
            //     </Footer>
            //     </div>
            
          
            
        );
    }
}

export default LoginForm;