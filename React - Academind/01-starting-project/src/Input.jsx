function Input({ twb, number }) {
	return (
		<div id="user-input">
			<div className="input-group">
				<label htmlFor="">
					initial investment
					<input
						type="number"
						name="initialInvestment"
						value={number.initialInvestment}
						onChange={twb}
					/>
				</label>
				<label htmlFor="">
					{' '}
					annual investment
					<input
						type="number"
						name="annualInvestment"
						value={number.annualInvestment}
						onChange={twb}
					/>
				</label>
			</div>
			<div className="input-group">
				<label htmlFor="">
					{' '}
					expected return
					<input
						type="number"
						name="expectedReturn"
						value={number.expectedReturn}
						onChange={twb}
					/>
				</label>
				<label htmlFor="">
					{' '}
					duration
					<input
						type="number"
						name="duration"
						value={number.duration}
						onChange={twb}
					/>
				</label>
			</div>
		</div>
	);
}

export default Input;
