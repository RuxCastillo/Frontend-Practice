export default function Negro() {
	return (
		<div className="absolute bg-black -z-10 h-screen w-screen top-0 left-0 ">
			<nav>
				<ul className="absolute bottom-10 left-1 text-white">
					<li>
						<i className="fa-solid fa-user mx-3"></i>
						<span>About</span>
					</li>
					<li className=" px-4">
						<i className="fa-solid fa-hippo mx-3"></i>
						<span>Page</span>
					</li>
					<li className="px-8">
						<i className="fa-solid fa-envelope mx-3"></i>
						<span>Contact</span>
					</li>
				</ul>
			</nav>
		</div>
	);
}
