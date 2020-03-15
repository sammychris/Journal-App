import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../auth';

const headStyle = {
	width: '100%',
	background: '#5360ed',
	boxShadow: '0 0 20px 20px #0000001c',
}

const Header = () => {
	return (
		<div className="header" style={headStyle}>
			<div style={{ color: '#fff', margin: 'auto', width: '80%', maxWidth: '1100px', display: 'flex', alignItems: 'center', height: '80px', justifyContent: 'space-between'}}>
				<div style={{ width: '160px', display: 'flex', alignItems: 'center', fontSize: '40px', justifyContent:'space-between' }}>
					<i className="fas fa-journal-whills"></i>
					<h1 style={{ maring: '0', fontSize: '20px', fontWeight: 'normal' }}>Journal App</h1>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', width: '200px'}}>
					<Link
						to='/notes?note=new'
						style={{
							background: '#3e48b3',
							borderRadius: '20px',
							padding: '8px',
							fontWeight: '400',
							color: '#fff',
							textDecoration: 'none'
						}}>
						
							<i className="far fa-edit"></i>  Start Writing

					</Link>
					<Link to="/" style={{color: '#fff'}}>
						<span onClick={logout}>Logout</span>
					</Link>
						{
						/* <li>Home</li>
						<li>Pofile</li>
						<li>Bookmarks</li>
						<li>Log out</li>
					*/ }
				</div>
			</div>
		</div>
	);
}

export default Header;
