import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function AddCourse({fetchData}){

	//Add state for forms of adding a course
	const [ name, setName ] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	//states for opening and closing modals
	const [showAdd, setShowAdd] = useState(false);

	//functions to handle opening and closing of modal
	const openAdd = () => setShowAdd(true);
	const closeAdd = () => setShowAdd(false);

	const addCourse = (e) => {
		e.preventDefault();

		fetch('http://localhost:4000/products/create', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data){
				Swal.fire({
					title: "Success",
					icon: "success",
					text: "Course successfully added"
				})
				//close modal
				closeAdd();
				//window.location.reload()
				fetchData();
			}
			else{
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Please try again"
				})

				fetchData();
			}

			//reset all states input
			setName('');
			setDescription('');
			setPrice(0);

		})
	}

	return(
			<>
				<Button variant="primary">Add New Course</Button>

				{/*//Add modal*/}

				<Modal show={showAdd} onHide={closeAdd}>
					<Form onSubmit={e => addCourse(e)}>
						<Modal.Header closeButton>
							<Modal.Title>Add Course</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Form.Group>
								<Form.Label>Name</Form.Label>
								<Form.Control type="text"
								required
								value={name}
								onChange={e => setName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>description</Form.Label>
								<Form.Control type="text"
								required
								value={description}
								onChange={e => setName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Price</Form.Label>
								<Form.Control type="text"
								required
								value={price}
								onChange={e => setName(e.target.value)}
								/>
							</Form.Group>
						</Modal.Body>

						<Modal.Footer>
							<Button variatn="secondary" onClick={closeAdd}>Close</Button>
							<Button variatn="success" type="submit" >Submit</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</>
		)
}