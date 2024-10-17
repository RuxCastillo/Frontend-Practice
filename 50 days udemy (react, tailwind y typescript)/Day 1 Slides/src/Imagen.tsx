interface ImagenInformation {
	source: string;
	titulo: string;
}

export default function Imagen({
	source,
	titulo,
}: ImagenInformation): JSX.Element {
	return (
		<div className=" relative h-4/5 basis-1/12 mx-4">
			<img
				className=" rounded-full object-cover w-full block h-full"
				src={source}
				alt={titulo}
			/>
			<h3 className=" absolute bottom-4 left-4 font-bold text-2xl opacity-0">
				{titulo}
			</h3>
		</div>
	);
}
