import { useState } from 'react';
import './index.css';
import './App.css';
import Imagen from './Imagen';
import Mainjsx from './Mainjsx';

function App() {
	const [isActive, setIsActive] = useState({
		id: 1,
	});

	function handleClick(anID: number): void {
		setIsActive({
			id: anID,
		});
	}

	return (
		<Mainjsx>
			<Imagen
				source={'../img/1.jpg'}
				titulo={'Trabajando'}
				id={1}
				isActive={isActive.id === 1}
				handleClick={handleClick}
			/>
			<Imagen
				source={'../img/2.jpg'}
				titulo={'Zoro'}
				isActive={isActive.id === 2}
				id={2}
				handleClick={handleClick}
			/>
			<Imagen
				source={'../img/3.jpg'}
				titulo={'Estrellas'}
				isActive={isActive.id === 3}
				id={3}
				handleClick={handleClick}
			/>
			<Imagen
				source={'../img/4.jpg'}
				titulo={'Robot'}
				isActive={isActive.id === 4}
				id={4}
				handleClick={handleClick}
			/>
			<Imagen
				source={'../img/5.jpg'}
				titulo={'Puertas'}
				isActive={isActive.id === 5}
				id={5}
				handleClick={handleClick}
			/>
		</Mainjsx>
	);
}

export default App;
