/*import CourseCard from '../components/CourseCard';
import coursesData from '../mock data/coursesData';*/
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext } from 'react';
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

	const { user } = useContext(UserContext);

	return(
			<>
				<h1>Courses</h1>
				{/*<CourseCard courseProp={coursesData[0]} /> {/*receive fr coursecard*/}
				{/*{courses}*/}
				{(user.isAdmin === true) ?
					<AdminView />
					:
					<UserView />
				}
			</>
		)
}