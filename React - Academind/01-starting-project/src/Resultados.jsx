import { calculateInvestmentResults } from './util/investment';
import { formatter } from './util/investment';

function Resultados({ number }) {
	let res = calculateInvestmentResults(number);
	const initialInvestment =
		res[0].valueEndOfYear - res[0].interest - res[0].annualInvestment;
	console.log(res);

	return (
		<>
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{res.map((element) => {
						const totalinterest =
							element.valueEndOfYear -
							element.annualInvestment * element.year -
							initialInvestment;
						const totalAmountInvested = element.valueEndOfYear - totalinterest;

						return (
							<tr key={element.year}>
								<td>{element.year}</td>
								<td>{formatter.format(element.valueEndOfYear)}</td>
								<td>{formatter.format(element.interest)}</td>
								<td>{formatter.format(totalinterest)}</td>
								<td>{formatter.format(totalAmountInvested)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Resultados;
