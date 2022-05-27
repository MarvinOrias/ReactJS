import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
	return (
			<Row>
				<Col xs={12} md={4}>
					<Card className="cardHighlight p-3">
						<Card.Body>
							<Card.Title>
								<h2>Learn From Home</h2>
							</Card.Title>
							<Card.Text>
								Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Obcaecati voluptatem nostrum ullam odit assumenda id reprehenderit esse quisquam porro sapiente sequi ducimus laboriosam, saepe, voluptatibus, eligendi, dicta? Deleniti, a, provident.
							</Card.Text>
						</Card.Body>
					</Card>					
				</Col>
				<Col xs={12} md={4}>
					<Card className="cardHighlight p-3">
						<Card.Body>
							<Card.Title>
								<h2>Study Now, Pay Later</h2>
							</Card.Title>
							<Card.Text>
								Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Obcaecati voluptatem nostrum ullam odit assumenda id reprehenderit esse quisquam porro sapiente sequi ducimus laboriosam, saepe, voluptatibus, eligendi, dicta? Deleniti, a, provident.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4}>
					<Card className="cardHighlight p-3">
						<Card.Body>
							<Card.Title>
								<h2>Be Part of the Community</h2>
							</Card.Title>
							<Card.Text>
								Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Obcaecati voluptatem nostrum ullam odit assumenda id reprehenderit esse quisquam porro sapiente sequi ducimus laboriosam, saepe, voluptatibus, eligendi, dicta? Deleniti, a, provident.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		)
}