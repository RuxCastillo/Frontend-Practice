import image from './assets/investment-calculator-logo.png';

function Header() {
	return (
		<header id="header">
			<img src={image} alt="logo imagen" />
			<h1>React Investment Calculator</h1>
		</header>
	);
}

export default Header;
