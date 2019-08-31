import React from 'react';
import { register } from '../auth';


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


class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
      email: '',
      password: '',
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
    const { name, email, password } = this.state;
    e.preventDefault();
    register({ name, email, password })
      .then((res) => {
      	if (res.success) {
      		setTimeout(() => alert('You may now login'), 4000);
      		this.props.controlUser();
      	}
      	alert(res.message);
      	console.log(res.message)
      	
      });
  }
	

	render() {
		const { name, email, password } = this.state;
		const { controlUser } = this.props;
		return (
			<div style={{ padding: '50px', textAlign: 'center'}}>
				<form style={{ width: '300px' }} onSubmit={this.handleSubmit}>
					<div style={inputsContainer}>
						<input
							onChange={this.handleChange}
							value={ name }
							name="name"
							type="text"
							placeholder="Samuel C. Okanume"
							style={inputs}/>
					</div>
					<div style={inputsContainer}>
						<input
							onChange={this.handleChange}
							type="email"
							value={ email }
							name="email"
							placeholder="email@address.com"
							style={inputs}
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
						/>
					</div>
					<div style={inputsContainer}>
						<button type="submit" style={{ width: '100%', padding: '10px', border: '0' }}>Login</button>
					</div>
				</form>
	      <p style={{ fontSize: '16px' }}>
	          Have an account?
	          <span onClick={controlUser} style={{ color: '#3782A3', fontWeight: 'bold', cursor: 'pointer' }}> Log in</span>
	        </p>
			</div>
		)
	}
	
}

export default Register;
