const validation = (req, res, next) => {
	
	let message;
	// Checking for empty body data.
	for ( let key in req.body ) {
		let name = key.replace(/^[a-z]{1}/i, a => a.toUpperCase());

		req.body[key] = req.body[key].trim().toLowerCase();

		if (!req.body[key]) {
			return res.json({ message: name+' field is required!' })
		};
	}


	// validating the user data function...
	const validating = (name, data, min, max) => {
		// checking for wrong email
		const wrongEmail = !(/[a-z]+@{1}[a-z]+.com/i.test(data));
		// message response
		message = name+' must be between '+min+' and '+max+' characters!';

		if (data){
			if (name === 'Email' && wrongEmail) {
				message = 'Email is invalid!';
				return true;
			}
			if (data.length < min || data.length > max ) return true;
		}
		return false;
	}



	// Validate auth User data
	const { name, email, password } = req.body;
	if (validating('Name', name, 3, 30)) return res.json({ message });
	if (validating('Email', email, 3, 30)) return res.json({ message });
	if (validating('Password', password, 8, 30)) return res.json({ message });



	// Validate Note data
	const { author, title, body, topic } = req.body;
	if (validating('Author', author, 3, 30)) return res.json({ message });
	if (validating('Title', title, 3, 60)) return res.json({ message });
	if (validating('Body', body, 20, 5000)) return res.json({ message });
	if (validating('Topic', topic, 3, 20)) return res.json({ message });


	// Validate user topic
	const { user_id } = req.body;
	if (validating('User id', user_id, 3, 30)) return res.json({ message });
	if (validating('Topic', topic, 3, 20)) return res.json({ message });

	next();
}

export default validation;
