/*import CourseCard from '../components/CourseCard';
import coursesData from '../mock data/coursesData';*/
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';

export default function CoursePage(){
/*	//check if mock data is retrieved
	console.log(coursesData);

	console.log(coursesData[0]);

	//to display all the courses from the data file, use map() method
	const courses = coursesData.map((individualCourse) => {
		return (
				//need unique key
				<CourseCard key={individualCourse.id} courseProp={individualCourse}/>
			)
	})*/

	const [ allCourses, setAllCourses ] = useState([]);

	const fetchData = () => {
		fetch('http://localhost:4000/products/all')
		.then(res => res.json())
		.then(data => {
			console.log(data, `data`)
			console.log(data.result);
			//storing all data to useState allCourses
			setAllCourses(data.result)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
			<>
				<h1>Products</h1>
				{/*<CourseCard courseProp={coursesData[0]} /> {/*receive fr coursecard*/}
				{/*{courses}*/}
				{(user.isAdmin === true) ?
					<AdminView coursesData={allCourses} fetchData={fetchData}/>
					:
					<UserView coursesData={allCourses}/>
				}
			</>
		)
}