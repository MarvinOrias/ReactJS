import CourseCard from '../components/CourseCard';
import coursesData from '../mock data/coursesData';

export default function CoursePage(){
	//check if mock data is retrieved
	console.log(coursesData);

	console.log(coursesData[0]);

	//to display all the courses from the data file, use map() method
	const courses = coursesData.map((individualCourse) => {
		return (
				//need unique key
				<CourseCard key={individualCourse.id} courseProp={individualCourse}/>
			)
	})

	return(
			<>
				<h1>Courses</h1>
				<CourseCard courseProp={coursesData[0]} /> {/*receive fr coursecard*/}
				{courses}
			</>
		)
}