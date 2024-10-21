import './App.css';
import CircleMenu from './CircleMenu';
import './index.css';
import MainHTML from './MainHTML';
import { useState } from 'react';
import Contenido from './Contenido';
import Negro from './Negro';

function App() {
	const [direction, setDirection] = useState(false);

	function moveDeg() {
		setDirection((prevState) => {
			return !prevState;
		});
	}
	return (
		<div className=" overflow-hidden ">
			<CircleMenu moveDeg={moveDeg} direction={direction} />
			<MainHTML direction={direction}>
				<Contenido />
			</MainHTML>
			<Negro />
		</div>
	);
}

export default App;
