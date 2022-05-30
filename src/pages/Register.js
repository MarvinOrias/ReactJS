import { Form, Button } from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Navigate } from 'react-router-dom';

export default function Register(){

	const { user } = useContext(UserContext);

	let [getEmail, setEmail] = useState('');
	let [getPass, setPass] = useState('');
	let [getVerifyPass, setVerifyPass] = useState('');

	//state for enable/disable button
	let [isActive, setIsActive] = useState(true);

	useEffect(() => {
		//validation to disable button
		if((getEmail !== '' && getPass !== '' && getVerifyPass !== '') && (getPass === getVerifyPass)){
			setIsActive(true);
		}
		else{
			setIsActive(false);
		}
	}, [getEmail, getPass, getVerifyPass]);

	let registerUser = (e) => {
		e.preventDefault(); //prevents from refreshing page
		setEmail(``);
		setPass(``);
		setVerifyPass(``);
		//sweetalert2
		Swal.fire({
			title: "YEEEEESSS",
			icon: "success",
			text: "Successfully registered"
		});
	}

	return (
			(user.accessToken !== null) ?
			<Navigate to="/courses" /> :
			<Form onSubmit={e => registerUser(e)}>
			<h1>Register</h1>
				<Form.Group>
					<Form.Label>Email Address</Form.Label>
					<Form.Control className="registerText" type="email" placeholder="Enter email" required value={getEmail} onChange={(e) => setEmail(e.target.value)}/>
					<Form.Text>
						We'll never share your information to anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control className="registerText" type="password" placeholder="Enter password" required value={getPass} onChange={(e) => setPass(e.target.value)}/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Verify Password</Form.Label>
					<Form.Control className="registerText" type="password" placeholder="Verify password" required value={getVerifyPass} onChange={(e) => setVerifyPass(e.target.value)}/>
				</Form.Group>

				{isActive ? <Button className="mt-3" variant="info" type="submit">Submit</Button>
				: <Button className="mt-3" variant="info" type="submit" disabled>Submit</Button>}
				
			</Form>
		)
}