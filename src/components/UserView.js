import CourseCard from './CourseCard';
import { useState, useEffect } from 'react';

export default function UserView({coursesData}){
	
	const [courses, setCourses] = useState([])

	//use .map inside the useEffect to render the rapid changes of data
	useEffect(() => {
		const coursesArr = coursesData.map(course => {
			if(course.isActive === true){
				return(
						<CourseCard key={course._id} courseProp={course}/>
					)
			}
			else{
				return null;
			}
		})

		//set courses state to result of map function to bring return course component outside the scope of useEffect where return statement below can see
		setCourses(coursesArr);

	}, [coursesData])

	return(
			<>
				<h1>User View</h1>
				{courses}
			</>
		)
}