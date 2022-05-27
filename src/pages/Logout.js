import { Navigate } from 'react-router-dom';

export default function logout(){
	//delete data save in localStorage
	localStorage.clear();

	return(
			<Navigate to="/" />
		)
}