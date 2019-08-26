import React from 'react';


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

const Login = (props) => {
	const { controlUser } = props;
	return (
		<div style={{ padding: '50px', textAlign: 'center'}}>
			<form style={{ width: '300px' }}>
				<div style={inputsContainer}>
					<input type="text" placeholder="email@address.com" style={inputs}/>
				</div>
				<div style={inputsContainer}>
					<input type="text" placeholder="password123" style={inputs}/>
				</div>
				<div style={inputsContainer}>
					<button type="submit" style={{ width: '100%', padding: '10px', border: '0' }}>Login</button>
				</div>
			</form>
			<p style={{ fontSize: '16px' }}>
        Don't have an account?
        <span onClick={controlUser} style={{ color: '#3782A3', fontWeight: 'bold', cursor: 'pointer' }}> Register</span>
      </p>
		</div>
	)
}

export default Login;
