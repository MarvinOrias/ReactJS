import {Card, Button, Container} from 'react-bootstrap';
import {useState, useContext, useEffect} from 'react';
import UserContext from '../UserContext';
import {useParams} from 'react-router-dom';
//useParams() contains any values trying to pass in URL stored
//useParams is how to receive the courseId passed via the URL

export default function SpecificCourse(){

	const {courseId} = useParams();

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	useEffect(() => {
		fetch(`http://localhost:4000/products/${courseId}`)
		.then(res=>res.json())
		.then(data=>{
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})
	}, [])

	const {user} = useContext(UserContext);
	return(
			<Container>
				<Card>
					<Card.Header>
						<h4>Name</h4>
					</Card.Header>

					<Card.Body>
						<Card.Text>Description</Card.Text>
						<h6>Price: Php</h6>
					</Card.Body>

					<Card.Footer>
					{user.accessToken !== null ?
						<Button variant="primary">Enroll</Button>
						:
						<Button variant="warning">Login to Enroll</Button>
					}
					</Card.Footer>
				</Card>
			</Container>
		)
}