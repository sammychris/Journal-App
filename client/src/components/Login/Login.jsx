import React from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../auth';


const inputs = {
	padding: '10px',
	fontSize: '16px',
	width: '93%',
	border: '0',
};

const inputsContainer = {
	paddingTop: '10px',
	paddingBottom: '10px',
};

class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: '',
      login: false,
		}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    login({ email, password })
      .then((res) => {
      	if (res.token) this.setState({ login: true });
      	alert(res.message);
      	console.log(res.message);
      });
  }
	
	render() {
		const { email, password } = this.state;
		const { controlUser } = this.props;
		return (
			<div style={{ padding: '50px', textAlign: 'center'}}>
				{ this.state.login && <Redirect to="/home" /> }
				<form style={{ width: '300px' }} onSubmit={this.handleSubmit}>
					<div style={inputsContainer}>
						<input
							onChange={this.handleChange}
							type="email"
							value={ email }
							name="email"
							placeholder="email@address.com"
							style={inputs}
							required
						/>
					</div>
					<div style={inputsContainer}>
						<input
							onChange={this.handleChange}
							type="text"
							value={ password }
							name="password"
							placeholder="password123"
							style={inputs}
							required
						/>
					</div>
					<div style={inputsContainer}>
						<button type="submit" style={{ cursor: 'pointer', width: '100%', padding: '10px', border: '0' }}>Login</button>
					</div>
				</form>
				<p style={{ fontSize: '16px' }}>
	        Don't have an account?
	        <span onClick={controlUser} style={{ color: '#3782A3', fontWeight: 'bold', cursor: 'pointer' }}> Register</span>
	      </p>
			</div>
		)
	}
}

export default Login;
