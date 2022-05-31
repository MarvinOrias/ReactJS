import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function EditCourse({ course, fetchData }){

	//states for editCourse model
	const [ showEdit, setShowEdit ] = useState(false);

	//state hook for course data
	const [courseId, setCourseId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	//function openEdit to get data to the form while opening modal

	const openEdit = (courseId) => {
		fetch(`http://localhost:4000/products/one`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			//populate all input values with the course information that we fetched
			setCourseId(data._id)
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})

		setShowEdit(true)
	}

	//function to handle the closing of modal and reset all relevant states back to its values
	const closeEdit = () => {
		setShowEdit(false)
		setName('')
		setDescription('')
		setPrice(0)
	}

	const editCourse = (e, courseId) => {
		e.preventDefault();

		fetch(`http://localhost:4000/products/update`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
			},
			body: JSON.stringify({
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
					text: "Course successfully updated"
				})
				fetchData()
				closeEdit()
			}
			else{
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Please try again"
				})

				fetchData()
				closeEdit()
			}
		})
	}

	return(
			<>
				<Button variant="primary" size="sm" onClick={() => openEdit(course)}>Update</Button>
				{/*Edit Moal*/}

				<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editCourse(e, courseId)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Course</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						{/*<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={name}
							      onChange={e => setName(e.target.value)}
							 />
						</Form.Group>*/}

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={description}
							      onChange={e => setDescription(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control 
							      type="number"
							      required
							      value={price}
							      onChange={e => setPrice(e.target.value)}
							 />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>
			</>
		)
}