import React, { useState } from 'react';
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


function Register ({ controlUser }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    register({ name, email, password })
      .then((res) => {
      	if (res.success) {
      		setTimeout(() => alert('You may now login'), 4000);
      		controlUser();
      	}
      	alert(res.message);
      	console.log({res})
      });
  }

	return (
			<div style={{ padding: '50px', textAlign: 'center'}}>
				<form style={{ width: '300px' }} onSubmit={handleSubmit}>
					<div style={inputsContainer}>
						<input
							onChange={(e) => setName(e.target.value)}
							value={ name }
							name="name"
							type="text"
							placeholder="Samuel C. Okanume"
							style={inputs}/>
					</div>
					<div style={inputsContainer}>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							value={ email }
							name="email"
							placeholder="email@address.com"
							style={inputs}
						/>
					</div>
					<div style={inputsContainer}>
						<input
							onChange={(e) => setPassword(e.target.value)}
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
	);
}


export default Register;
