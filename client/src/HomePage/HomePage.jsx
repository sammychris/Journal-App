import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components';
import CardNotes from '../components/CardNotes';
import NewNote from '../components/NewNote';
import ReadNote from '../components/ReadNote';
import UpdateNote from '../components/UpdateNote';
import Loader from '../components/Loader';
import { getAll } from '../components/noteApi';



function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}



const HomePage = () => {
	const [ notes, setNotes ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ note, setNote ] = useState({ title:'', body: '', _id: '' });
	const activeRef = useRef(null);
	const scrollToElement = () => activeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
	const noteId = useQuery().get('id');
	const noteUrl = useQuery().get('note');

	useEffect(async () => {
		setIsLoading(true);
	    await handleFetch();
	    setIsLoading(false);
	}, []);

	const handleFetch = async () => {
		const res = await getAll();
    	if (res.success) {
    		const notes = res.notes;
          	setNotes(notes);
          	findNote(noteId, notes);
          	setIsLoading(false);
        } else alert(res.message);
	};

	const findNote = (noteId, allNotes=notes) => {
		const note = allNotes.find(obj => obj._id === noteId);
		setNote({...note});
	}

    const newNotes = notes.filter(obj => obj._id !== noteId);

    console.log({activeRef})
	return (
		<div>
			<Loader isLoading={isLoading} />
			<Header />
			<div ref={activeRef}
				style={{
					margin: 'auto',
					width: '90%',
					maxWidth: '1000px',
					fontSize: '18px',
					height: '100%',
				}}
			>
				{	noteUrl === 'read' && 
					<ReadNote
						setIsLoading={setIsLoading}
						note={note}
						notes={notes}
						noteId={noteId}
						findNote={findNote}
						setNote={setNote}
						handleFetch={handleFetch}
					/>
				}
				{	noteUrl === 'edit' &&
					<UpdateNote
						setIsLoading={setIsLoading}
						note={note}
						setNote={setNote}
						handleFetch={handleFetch} />
				}
				{	noteUrl === 'new' &&
					<NewNote
						setIsLoading={setIsLoading}
						note={note} 
						handleFetch={handleFetch}
					/>
				}
			</div>
			<CardNotes
				setIsLoading={setIsLoading}
				notes={newNotes}
				findNote={findNote}
				handleFetch={handleFetch}
				scrollToElement={scrollToElement}
			/>
		</div>
	)
}

export default HomePage;
