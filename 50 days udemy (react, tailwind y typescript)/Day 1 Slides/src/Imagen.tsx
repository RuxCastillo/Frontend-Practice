interface ImagenInformation {
	source: string;
	titulo: string;
	handleClick: Function;
	id: number;
	isActive: boolean;
}

export default function Imagen({
	source,
	titulo,
	handleClick,
	id,
	isActive,
}: ImagenInformation): JSX.Element {
	return (
		<div
			className={` relative h-4/5 ${
				isActive ? 'basis-7/12' : 'basis-1/12'
			} mx-3 shadow-md transition-all duration-1000`}
			onClick={() => handleClick(id)}
		>
			<img
				className=" object-cover w-full block h-full rounded-3xl"
				src={source}
				alt={titulo}
			/>
			<h3
				className={` absolute bottom-4 left-4 font-bold text-2xl ${
					isActive ? null : 'opacity-0'
				} text-white`}
			>
				{titulo}
			</h3>
		</div>
	);
}
