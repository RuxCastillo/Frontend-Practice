import { calculateInvestmentResults } from './util/investment';
import { formatter } from './util/investment';

function Resultados({ number }) {
	let res = calculateInvestmentResults(number);
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
						return (
							<tr key={element.year}>
								<td>{element.year}</td>
								<td>{formatter.format(element.valueEndOfYear)}</td>
								<td>{formatter.format(element.interest)}</td>
								<td>1</td>
								<td>{formatter.format(element.annualInvestment)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Resultados;
