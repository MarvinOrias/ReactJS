import { Button, Row, Col } from 'react-bootstrap';

export default function Banner(props) {
	return (
			<Row>
				<Col className="p-5">
					<h1>Hello {props.value}</h1> {/*property taken from Home*/}
					<h1 className="mb-3">Zuitt Coding Bootcamp</h1>
					<h3 className="mb-3">Batch 176</h3>
					<p className="mb-3">Opportunities for everyone, everywhere.</p>
					<Button variant="primary">Enroll now!</Button>
				</Col>
			</Row>
		)
}