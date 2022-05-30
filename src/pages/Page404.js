import { useLocation } from 'react-router-dom';
import { Alert, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Page404(){
	return(
			<Row>
				<Col>
					<h1>Error 404: Page not found</h1>
					<Button variant="success" as={Link} to="/">Return Home</Button>
				</Col>
			</Row>
		)
}