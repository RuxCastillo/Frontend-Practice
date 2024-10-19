import './App.css';
import './index.css';
import MainDiv from './MainDiv';
import Container from './Container';
import Numero from './Numero';
import Linea from './Linea';
import Boton from './Boton';

function App() {
	return (
		<MainDiv>
			<Container>
				<Numero number={1} />
				<Numero number={2} />
				<Numero number={3} />
				<Numero number={4} />
				<Linea />
				<Linea />
				<Boton text={'Previo'} />
				<Boton text={'Siguiente'} />
				<button className="absolute bottom-8 h-12 w-20 bg-gray-500 shadow-md rounded-md text-white">
					Previo
				</button>
			</Container>
		</MainDiv>
	);
}

export default App;
