export default function Numero(props: any) {
	return (
		<div
			className={`rounded-full h-1/3 w-2/12 border-8 ${
				props.isActive ? 'border-blue-400' : 'border-gray-200'
			} bg-white border-solid flex justify-center items-center text-6xl duration-1000 transition-all`}
		>
			{props.number}
		</div>
	);
}
