import {Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ArchiveCourse({ course, isActive, fetchData }) {

	const archiveToggle = (courseId) => {
		fetch(`http://localhost:4000/products/archive`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`
			},
			body: JSON.stringify({
				
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data){
				Swal.fire({
					title: "Success",
					icon: "success",
					text: "Course successfully disabled"
				})
				fetchData()
			}
			else{
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "Something went wrong"
				})
				fetchData()
			}
		})
	}

	return(
			<>
				{isActive ?
					<Button variant="danger" size="sm" onClick={() => archiveToggle(course)}>Disable</Button>
					:
					<Button variant="success" size="sm">Enable</Button>
				}
			</>
		)
}