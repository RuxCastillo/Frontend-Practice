export default function CircleMenu({ moveDeg, direction }: any): JSX.Element {
	return (
		<nav
			className={` relative bg-orange-400 w-52 h-52 rounded-full z-10 -translate-x-1/2 -translate-y-1/2 ${
				direction && '-rotate-90'
			} transition-all duration-1000`}
		>
			<button
				className="fa-solid fa-bars absolute bottom-10 right-10 h-9 w-9 "
				onClick={moveDeg}
			></button>
			<button
				className="fa-solid fa-xmark absolute bottom-10 left-10 h-9 w-9"
				onClick={moveDeg}
			></button>
		</nav>
	);
}
