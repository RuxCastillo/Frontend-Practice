export default function Container({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<div className=" relative border-solid border-2 border-black w-4/6 h-2/3 flex justify-around items-center">
			{children}
		</div>
	);
}
