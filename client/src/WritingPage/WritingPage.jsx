import React from 'react';
import { Header } from '../components';


const rows = {
	width: '100%',
	display: 'flex',
	padding: '20px',
}

const close = {
	position: 'absolute',
	top: '20px',
	right: '30px',
	fontSize: '24px',
	fontWeight: '400',
	color: '#333',
}
class WritingPage extends React.Component {
	constructor(props) {
		super(props);

	}
	
	componentDidMount () {
		const Editor = window.FroalaEditor;
		new Editor('#edit', {
	      // Set the file upload URL.
	      imageUploadURL: 'image_upload',
	      imageUploadParams: {
	        id: 'my_editor'
	      }
	    })
	}
	render() {
		return (
		<div>
			<Header />
			<div style={{
				padding: '100px 0',
				margin: 'auto',
				width: '1000px',
				fontSize: '18px',
			}}>
				<div style={{ background: '#fff', padding: '50px', position: 'relative', }}>
					<div className="close" style={close}>
						<i className="fas fa-times"></i>
					</div>
					<div style={{ width: '700px', margin: 'auto'}}>
						<h1>Digital Journal | Create a note </h1>
						<form>
							<div style={rows}>
								<div style={{ width: '10%'}}>
									<label htmlFor="">Topic: </label>
								</div>
								<select name="type" required style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #cccccc'}}>
		              <option value="">Selete an Option</option>
		              <option value="maintenance">Maintenance</option>
		              <option value="repair">Repair</option>
		            </select>
							</div>
							<div style={rows}>
								<div style={{ width: '10%'}}>
									<label htmlFor="">Title: </label>
								</div>
								<input type="text"
									placeholder='write your title here.'
									style={{ width: '90%', padding: '10px', borderRadius: '5px', border: '1px solid #cccccc'}}
								/>
							</div>
							<div style={rows}>
								<div style={{ width: '10%' }}>
									<label htmlFor="">Body: </label>
								</div>
								<div style={{ width: '90%', maxWidth: '720px'}}>
									<textarea
										id="edit"
										name="content"
										placeholder="write your body here..."
									/>
								</div>
							</div>
							<div style={rows}>
								<span style={{ width: '10%'}}></span>
								<button style={{ cursor: 'pointer', background: '#5360ed', padding: ' 15px 20px', border: '0', color: '#fff', borderRadius: '2px' }}>
								Save and Publish
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
	}
}

export default WritingPage;
