import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { del } from '../noteApi';


const editAnddelete = (background) => {
	return {
		color: '#fff',
		background,
		marginTop: '2px',
		width: '40px',
		height: '30px',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: '2px',
		display: 'flex',
		justifyContent: 'center',
	}
}


const close = {
	position: 'absolute',
	top: '20px',
	right: '30px',
	fontSize: '24px',
	fontWeight: '400',
	color: '#333',
}


function ReadNote ({ setIsLoading, note, notes, noteId, handleFetch, findNote }) {
	const history = useHistory();
	const { _id, title, body } = note;

	const deleteNote = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		if(window.confirm('Are you sure?')){
			const res = await del(_id);
			if (res.success) {
				alert(res.message);
				await handleFetch();
				setIsLoading(false);
			}

		} else setIsLoading(false);
	}


	return (
		<div style={{ background: '#fff', margin: '50px 0', padding: '50px', position: 'relative', }}>
			<Link to="/notes" className="close" style={close}>
				<i className="fas fa-times"></i>
			</Link>
			<div style={{ width: '700px', margin: 'auto'}}>
				<h1>{title}</h1>
				<div>By Samuel C. Okanume | 18 Feb, 2018 </div>
				{/*<div>05:00</div>
				<div style={{color: 'blue'}}>Follow author</div>
				<div>
					<span style={{ fontWeight: 'bold'}}>Life: </span>
					<span style={{marginLeft: '5px', color: 'blue'}}> follow this topic</span>
				</div>*/}

				{body?.split('\n').map(text => <p>{text}</p>)}

				<div style={{ display: 'flex', width: '100px', justifyContent:'space-between', padding: '20px 0'}}>
					<Link
						onClick={e => findNote(_id)}
						to={`/notes?note=edit&id=${_id}`}
						className="edit"
						title="edit"
						style={editAnddelete('#baafbe')}
					>
            			<i className="far fa-edit"></i>
              		</Link>
					<Link
						to='#'
						className="del"
						title="delete"
						style={editAnddelete('#df5146')}
						onClick={deleteNote}
					>
		                <i className="far fa-trash-alt"></i>
		            </Link>
      			</div>

			</div>
		</div>
	);
}

export default ReadNote;
