export default function MainDiv({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main className="justify-center items-center flex h-screen w-screen">
			{children}
		</main>
	);
}
