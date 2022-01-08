import React from 'react';


const Profile = () => {
	return(
		<div class="profile">
			<img src="https://images.unsplash.com/photo-1548142813-c348350df52b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMjgxOTMzMw&ixlib=rb-1.2.1&q=85" alt="" class="photo" />
			<span class="name">Frances S. Cady</span>
			<span class="details">Building next-gen energy tech product at Company</span>
			<div class="buttons">
				<div class="button follow">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M19 8V14M16 11H22H16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					Follow
				</div>
				<div class="button message">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M8 9H16" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M8 13H14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					Send Message
				</div>
			</div>
		</div>
	)
}

export default Profile;