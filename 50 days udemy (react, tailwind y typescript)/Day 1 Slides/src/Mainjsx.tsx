export default function Mainjsx({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main className=" flex justify-center items-center h-screen">
			{children}
		</main>
	);
}
