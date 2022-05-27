import { Card, Button } from 'react-bootstrap';

export default function CourseCard() {
	return(
			<Card>
				<Card.Body>
					<Card.Title>Sample Course</Card.Title>
					<Card.Subtitle>Description</Card.Subtitle>
					<Card.Text>This is a sample course offering</Card.Text>
					<Card.Subtitle>Price:</Card.Subtitle>
					<Card.Text>Php 4000</Card.Text>
					<Button variant="info">Enroll</Button>
				</Card.Body>
			</Card>
		)
}