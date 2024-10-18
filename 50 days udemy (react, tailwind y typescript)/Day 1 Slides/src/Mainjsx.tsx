export default function Mainjsx({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main className=" flex justify-around items-center h-screen w-screen">
			{children}
		</main>
	);
}
