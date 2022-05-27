//React bootstrap components
import { Navbar, Nav } from 'react-bootstrap';

export default function AppNavbar() {
	return(
			<Navbar bg="dark" expand="lg" variant="dark">
				<Navbar.Brand className="ms-3">Zuitt</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>Courses</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
}

//export default AppNavbar