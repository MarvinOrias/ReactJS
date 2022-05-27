//React bootstrap components
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AppNavbar() {

	let [ getUser, setUser ] = useState(localStorage.getItem('email'));
	console.warn(getUser);

	return(
			<Navbar bg="dark" expand="lg" variant="dark">
				<Navbar.Brand className="ms-3">Zuitt</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/courses">Courses</Nav.Link>
					
					{(getUser !== null) ?
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
						:
						<>
							<Nav.Link as={Link} to="/login">Login</Nav.Link>
							<Nav.Link as={Link} to="/register">Register</Nav.Link>
						</>
					}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
}

//export default AppNavbar