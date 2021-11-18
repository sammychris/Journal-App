import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { del } from '../noteApi';

const note = {
	width: '270px',
	height: '250px',
	background: '#fff',
	color: 'black',
	padding: '16px',
	borderRadius: '5px',
	boxShadow: '3px 4px 10px #000000a3',
	marginBottom: '100px',
	position: 'relative',
}

const optionStyle = {
    position: 'absolute',
    background: 'white',
    right: '-90px',
    top: '0px',
    borderRadius: '2px',
    boxShadow: 'rgb(0 0 0 / 36%) 3px 4px 4px',
    zIndex: 1,
    "&:hover": {
      background: "#efefef"
    },
}

const linkStyle = {
	fontSize: 14,
	padding: '10px 20px',
	textDecoration: 'none',
	display: 'block',
	color: '#333',
	"&:hover": {
      background: "#efefef"
    },
}



const Card = ({ setIsLoading, _id, title, body, createdAt, findNote, handleFetch, scrollToElement }) => {
	const [ showSelect, setShowSelect] = useState(false);
	const optionRef = useRef(null);
    const showOptionRef = useRef(null);

	useEffect(() => {
		window.addEventListener('click', clickEvent, true)
		return () => { 
			window.removeEventListener('click', clickEvent, true);
		}
	}, [])

	const clickEvent = (e) => {
        if (optionRef.current.contains(e.target)) {
            setShowSelect(!showSelect);
        } else if (showOptionRef.current){
            setShowSelect(showOptionRef.current.contains(e.target));
        } 
	}

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
		<div className="notes" style={note}>
			{ showSelect && 
				<div style={optionStyle} ref={showOptionRef}>
					<Link
						onClick={e => findNote(_id)}
						to={`/notes?note=edit&id=${_id}`}
						style={linkStyle}
					> Edit </Link>
					<hr style={{margin: 0}}/>
					<Link
						to="#"
						style={linkStyle}
						onClick={deleteNote}
					> Delete </Link>
				</div>
			}
			
			<a href="#"style={{textDecoration: 'none', zIndex: 2}} ref={optionRef}>
				<i class="fas fa-ellipsis-v" style={{float: 'right', padding: 7, fontSize:15, color:'#636363'}}></i>
			</a>
			<p style={{fontSize: 16, margin:0}}>
				{/*<span style={{ color: '#333', display: 'block' }}>By Samuel C. Okanume</span>*/}
				<span style={{ color: '#636363', fontSize:14 }}>September 14, 2016 {createdAt}</span>
			</p>

			<h2 style={{ fontSize: 24, color: '#2b2b2b', fontWeight: 500 }}>
				{title}
			</h2>
			<p style={{ fontSize: 14, color: '#636363', margin: 0 }}>
				{body.slice(0, 250)}...
			</p>
			<div style={{ position: 'absolute', bottom: 10,fontSize: 15 }} onClick={e => findNote(_id)}>
				<Link
					to={`/notes?note=read&id=${_id}`}
					style={{textDecoration: 'none'}}
					onClick={scrollToElement}
				>
					Read
				</Link>
			</div>
		</div>
	)
}

export default Card;
