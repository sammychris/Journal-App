import React from 'react';
import { Header } from '../components';

const note = {
	width: '220px',
	height: '190px',
	background: '#fff',
	color: 'black',
	padding: '30px',
	borderRadius: '5px',
	boxShadow: '3px 4px 10px #000000a3',
	marginBottom: '100px',
}
const HomePage = () => {
	return (
		<div>
			<Header />
			<div style={{
				padding: '100px 0 0',
				margin: 'auto',
				display: 'flex',
				flexWrap: 'wrap',
				width: '1000px',
				fontSize: '18px',
				justifyContent: 'space-around',
			}}>
				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>What's the point of life?</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>
				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to make a tough decision?
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>
				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>

				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>

				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>
				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>

				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>
				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>

				<div className="notes" style={note}>
					<h1 style={{ fontSize: '24px', color: '#2b2b2b' }}>
					How to understand what you want in life
					</h1>
					<p style={{ color: '#636363' }}>By Samuel C. Okanume</p>
					<p>PHOTO</p>
					<span style={{ color: '#636363' }}>10:00</span>
				</div>
			</div>
		</div>
	)
}

export default HomePage;
