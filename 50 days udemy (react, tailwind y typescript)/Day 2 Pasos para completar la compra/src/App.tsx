import './App.css';
import './index.css';
import MainDiv from './MainDiv';
import Container from './Container';
import Numero from './Numero';
import Linea from './Linea';
import Boton from './Boton';
import { useState, useRef } from 'react';

function App() {
	const currentArr = useRef([true, false, false, false]);
	const currentLine = useRef(['w-1/12', 'w-4/12', 'w-7/12', 'w-10/12']);
	const [stepDone, setStepDone] = useState(0);

	function handleClickNext() {
		if (stepDone < 3) {
			setStepDone((prevState) => {
				const nextStep = prevState + 1;
				currentArr.current[nextStep] = true;
				return nextStep;
			});
		}
	}

	function handleClickPrev() {
		if (stepDone > 0) {
			setStepDone((prevState) => {
				currentArr.current[prevState] = false;
				const prevStep = prevState - 1;
				return prevStep;
			});
		}
	}

	return (
		<MainDiv>
			<Container>
				<Numero number={1} isActive={currentArr.current[0]} />
				<Numero number={2} isActive={currentArr.current[1]} />
				<Numero number={3} isActive={currentArr.current[2]} />
				<Numero number={4} isActive={currentArr.current[3]} />
				<Linea color={'bg-gray-200'} width={'w-10/12'} />
				<Linea color={'bg-blue-400'} width={currentLine.current[stepDone]} />
				<Boton
					text={'Previo'}
					posicion={'right-1/2'}
					function={handleClickPrev}
				/>
				<Boton
					text={'Siguiente'}
					posicion={'left-1/2'}
					function={handleClickNext}
				/>
			</Container>
		</MainDiv>
	);
}

export default App;
