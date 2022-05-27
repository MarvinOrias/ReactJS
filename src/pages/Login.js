import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Login() {

	let [ getEmail, setEmail ] = useState('');
	let [ getPass, setPass ] = useState('');
	let [ getIsActive, setIsActive ] = useState(true);

	useEffect(() => {
		if(getEmail !== '' && getPass !== ''){
			setIsActive(true);
		}
		else{
			setIsActive(false);
		}
	}, [getEmail, getPass]);

	function authentication(e){
		e.preventDefault();

		//set credentials of user in local storage of web
		//localStorage.setItem(key(propertyName), value)
		//localStorage saves info to localStorage
		localStorage.setItem('email', getEmail);

		//clear inputs
		setEmail('');
		setPass('');

		Swal.fire({
			title: "YEEEEEEEEESSS",
			icon: "success",
			text: `${getEmail} has been verified`
		});
	}

	return(
			<Form onSubmit={e => authentication(e)}>
				<Form.Group>
				<h1 className="mt-3">Log In</h1>
					<Form.Label>Email Address</Form.Label>
					<Form.Control className="registerText" type="email" placeholder="Enter email" required value={getEmail} onChange={(e) => setEmail(e.target.value)}/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control className="registerText" type="password" placeholder="Enter password" required value={getPass} onChange={(e) => setPass(e.target.value)}/>
				</Form.Group>

				{ getIsActive ?
							<Button variant="primary" type="submit" className="mt-3">
								Submit
							</Button>
							:
							<Button variant="primary" type="submit" className="mt-3" disabled>
								Submit
							</Button>
							}
				
			</Form>
		)
}