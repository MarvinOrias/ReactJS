import Banner from '../components/Banner';
import Highlights from '../components/Highlights';

export default function Home(){
	return(
			<>
				<Banner name="Jack" value="Soldier"/> {/*Properties can be passed to Home > Banner*/}
				<Highlights />
			</>
		)
}