export default function Boton(props: any): JSX.Element {
	return (
		<button
			className={`absolute bottom-8 h-12 w-20 bg-gray-500 shadow-md rounded-md text-white ${props.posicion} mx-4`}
			onClick={props.function}
		>
			{props.text}
		</button>
	);
}
