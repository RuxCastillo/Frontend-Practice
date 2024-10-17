import { useState } from 'react';
import './index.css';
import './App.css';
import Imagen from './Imagen';
import Mainjsx from './Mainjsx';

function App() {
	const [isActive, setIsActive] = useState();

	return (
		<Mainjsx>
			<Imagen source={'../img/1.jpg'} titulo={'Trabajando'} />
			<Imagen source={'../img/2.jpg'} titulo={'Zoro'} />
			<Imagen source={'../img/3.jpg'} titulo={'Estrellas'} />
			<Imagen source={'../img/4.jpg'} titulo={'Robot'} />
			<Imagen source={'../img/5.jpg'} titulo={'Puertas'} />
		</Mainjsx>
	);
}

export default App;
