import {Card, Button, Container} from 'react-bootstrap';
import {useState, useContext, useEffect} from 'react';
import UserContext from '../UserContext';
import {useParams, Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
//useParams() contains any values trying to pass in URL stored
//useParams is how to receive the courseId passed via the URL

export default function SpecificCourse(){

	const navigate = useNavigate();

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

	//enroll function
	const enroll = (courseId) => {
		fetch('http://localhost:4000/orders/create', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem(`accessToken`)}`
			},
			body: JSON.stringify({
				courseId: courseId
			})
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)

			if(data){
				Swal.fire({
					title: "Successfully created",
					icon: "success",
					text: "Successful"
				})
				navigate('/courses')
			}
			else{
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Please try again"
				})
			}
		})
	}

	return(
			<Container>
				<Card>
					<Card.Header>
						<h4>{name}</h4>
					</Card.Header>

					<Card.Body>
						<Card.Text>{description}</Card.Text>
						<h6>Price: {price}</h6>
					</Card.Body>

					<Card.Footer>
					{user.accessToken !== null ?
						<Button variant="primary" onClick={() => enroll(courseId)}>Enroll</Button>
						:
						<Button variant="warning" as={Link} to="/login">Login to Enroll</Button>
					}
					</Card.Footer>
				</Card>
			</Container>
		)
}