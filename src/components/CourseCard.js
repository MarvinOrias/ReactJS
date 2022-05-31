import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//destruct

export default function CourseCard({courseProp}) {
	console.log(courseProp);
	const { _id, name, description, price } = courseProp;

	//use state hook to be able to store value
	//states are used to keep track of information related to individual components

	//syntax
		//const [currentValue(getter), updatedValue(setter)] = useStae(initialGetterValue)

		//const [getCount, setCount] = useState(0);
		//const [getSeat, setSeat] = useState(30);

		//for enable/disable of button
		//const [isOpen, setIsOpen] = useState(true);

		/*useEffect(() => {
			if(getSeat === 0){
				setIsOpen(false);
			}
		}, [getSeat]);*/

		//function enroll(){
/*			setCount(getCount + 1);
			console.warn(`Enrollees count: ${getCount}`);
			setSeat(getSeat - 1);
			console.warn(`Seats left: ${getSeat}`);*/

			/*if(getCount >= 10){
				console.log(`stop`);
			}
			else{
				setCount(getCount + 1);
			}*/

			/*if(getSeat > 0){
				setCount(getCount + 1);
				console.warn(`Enrollees count: ${getCount}`);
				setSeat(getSeat - 1);
				console.warn(`Seats left: ${getSeat}`);
			}
			else{
				alert(`No more seats available`);
			}*/
			/*setCount(getCount + 1);
			console.warn(`Enrollees count: ${getCount}`);
			setSeat(getSeat - 1);
			console.warn(`Seats left: ${getSeat}`);
		}*/

	return(
			<Card className="mt-3">
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle>Description</Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Subtitle>Price:</Card.Subtitle>
					<Card.Text>{price}</Card.Text>

					<Button variant="info" as={ Link } to={`/courses/${_id}`}>Details</Button>
					{/*<Card.Text>Enrollees: {getCount}</Card.Text>
					<Card.Text>Seats available: {getSeat}</Card.Text>

					{isOpen ? 
					: <Button variant="info" onClick={enroll} disabled className="">Slots full</Button>}*/}
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