import React from 'react';
import { Header } from '../components';


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
class ReadingPage extends React.Component {
	constructor(props) {
		super(props);

	}
	
	componentDidMount () {

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
						<h1>The Tragedy of life</h1>
						<div>By Samuel C. Okanume | 18 Feb, 2018 </div>
						<div>05:00</div>
						<div style={{color: 'blue'}}>Follow author</div>
						<div>
							<span style={{ fontWeight: 'bold'}}>Life: </span>
							<span style={{marginLeft: '5px', color: 'blue'}}> follow this topic</span>
							</div>
						<p>There are many variations of passages of Lorem Ipsum available,
						 but the majority have suffered alteration in some form, by injected humour,
						  or randomised words which don't look even slightly believable.
						  </p>
						  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
						  </p>
						  <p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
						  </p>
						  <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
						 The generated Lorem Ipsum is therefore always free from repetition,
						  injected humour, or non-characteristic words etc.</p>
						  <div style={{ display: 'flex', width: '100px', justifyContent:'space-between', padding: '20px 0'}}>
							  <div className="edit" title="edit" style={editAnddelete('#baafbe')}>
	                <i className="far fa-edit"></i>
	              </div>
							  <div className="del" title="delete" style={editAnddelete('#df5146')}>
	                <i className="far fa-trash-alt"></i>
	              </div>
              </div>

					</div>
				</div>
			</div>
		</div>
	);
	}
}

export default ReadingPage;
