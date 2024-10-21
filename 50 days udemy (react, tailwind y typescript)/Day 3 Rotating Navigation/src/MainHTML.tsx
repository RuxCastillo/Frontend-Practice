export default function MainHTML({ children, direction }: any): JSX.Element {
	return (
		<main
			className={` absolute w-screen bg-gray-200 origin-top-left top-0 left-0${
				direction && ' -rotate-12 '
			} transition-all duration-1000 `}
		>
			{children}
		</main>
	);
}
