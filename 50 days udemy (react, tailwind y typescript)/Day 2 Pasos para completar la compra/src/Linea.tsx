export default function Linea(props: any): JSX.Element {
	return (
		<div
			className={`${props.width} absolute ${props.color} h-4 -z-10 origin-left left-10 transition-all duration-1000`}
		></div>
	);
}
