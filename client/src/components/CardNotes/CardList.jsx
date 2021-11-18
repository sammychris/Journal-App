import React from 'react';
import Card from './Card';


const CardList = ({ setIsLoading, notes, findNote, handleFetch, scrollToElement }) => {
	return (
		<div style={{
			padding: '50px 0 0',
			margin: 'auto',
			display: 'flex',
			flexWrap: 'wrap',
			width: '1000px',
			fontSize: '18px',
			justifyContent: 'space-around',
		}}>
			{ 
				notes.map(note => {
					return (<Card
								{ ...note }
								setIsLoading={setIsLoading}
								findNote={findNote}
								scrollToElement={scrollToElement}
								handleFetch={handleFetch}
							/>)
				}) 
			}
		</div>
	)
}

export default CardList;
