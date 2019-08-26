import React from 'react';
import { Login, Register } from '../components';

class LoginPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isNewUser: false,
		}
		this.controlUser = this.controlUser.bind(this);
	}

	controlUser () {
		const { isNewUser } = this.state;
		this.setState({ isNewUser: !isNewUser });
	}

  render() {
  	const { isNewUser } = this.state;
	  return (
	    <div style={{display: 'flex', width: '1000px', background: '#ce9aa3', padding: '20px', fontSize: '18px' }}>
	    	<div style={{ padding: '50px', borderRight: '1px solid', width: '50%' }}>
	      	<h1>Journal</h1>
	      	{	isNewUser
	      		? <p>Journal is an app specifically targeting passionate readers amongst us. 
	      		This app provides you with all your favorite topics and daily brain food.</p>
	      		: <p>Welcome Back!</p>
	      	}
	    	</div>
	    	<div style={{ width: '50%' }}>
		    	{ isNewUser
		    		? <Register controlUser={this.controlUser}/>
		    		: <Login controlUser={this.controlUser}/>
		    	}
	    	</div>
	    </div>
	  );
  }
}

export default LoginPage;
