import React, { useState } from 'react';
import "./thermometer.css"

export const Thermometer = () => {
	const [temperatureValue, setTemperatureValue] = useState(10);
	const [temperatureColor, setTemperatureColor] = useState('cold');

	const increaseTemperature = () => {
		const newTemperature = temperatureValue + 1;
		setTemperatureValue(newTemperature);

		if (newTemperature >= 15) {
			setTemperatureColor('hot');
		}
	};

	const decreaseTemperature = () => {
		const newTemperature = temperatureValue - 1;
		setTemperatureValue(newTemperature);
		if (newTemperature < 15) {
			setTemperatureColor('cold');
		}
	};

	return (
		<>
		<div className='thermometerContainer'>
		<div className='innertherm-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-containerz'>
				<button className= "button1" onClick={increaseTemperature}>+</button>
				<button className= "button1" onClick={decreaseTemperature}>-</button>
			</div>
		</div>
		</div>
		</>
	);
};

export default Thermometer;