import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

//destruct

export default function CourseCard({courseProp}) {
	console.log(courseProp);
	let { name, desc, price } = courseProp;
	return(
			<Card>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle>Description</Card.Subtitle>
					<Card.Text>{desc}</Card.Text>
					<Card.Subtitle>Price:</Card.Subtitle>
					<Card.Text>{price}</Card.Text>
					<Button variant="info">Enroll</Button>
				</Card.Body>
			</Card>
		)
}


//or traditional

//export default function CourseCard(props) {
	//console.log(props) /*pass to coursecard > coursepage*/
	/*return(
			<Card>
				<Card.Body>
					<Card.Title>{props.courseProp.name}</Card.Title>
					<Card.Subtitle>Description</Card.Subtitle>
					<Card.Text>{props.courseProp.description}</Card.Text>
					<Card.Subtitle>Price:</Card.Subtitle>
					<Card.Text>{props.courseProp.price}</Card.Text>
					<Button variant="info">Enroll</Button>
				</Card.Body>
			</Card>
		)*/
//}

//check type of data
//proptypes are used for validationg info passed to a component and is a tool normally used to help devs ensure the correct info is passed fr one component to another

CourseCard.propTypes = {
	courseProp: PropTypes.shape({
		//define the properties and type
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
};