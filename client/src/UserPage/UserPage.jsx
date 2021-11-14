import React from 'react';
import { Header } from '../components';
import CardNotes from '../components/CardNotes';
import NewNote from '../components/NewNote';
import ReadNote from '../components/ReadNote';
import Profile from '../components/Profile';


const HomePage = () => {
	return (
		<div>
			<Header />
			<Profile />
			<ReadNote />
			<NewNote />
			<CardNotes />
		</div>
	)
}

export default HomePage;
