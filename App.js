import {useState, useEffect} from 'react';
import Values from 'values.js'
import SingleColor from './SingleColor';


const App = () => {
	const [value, setValue] = useState('#ffff00');
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [colors, setColors] = useState([]);

	// console.log(color.all());
	const handleClick = () => {
		if(value.length === 0 ){
			setError(true);
			setErrorMsg('Please Enter a color');
			return;
		}
		if(value.length < 7 || value.length > 7 ){
				   setErrorMsg('color value should be 7 chracter');
			return setError(true);
		}
		try {
			let colorsList = new Values(value).all(10);
			setColors(colorsList);

		} catch(e){
			if(e.message === `Unable to parse color from string: ${value}`){
				setError(true);
				setErrorMsg(e.message);
			}
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setError(false);
			setValue("");
		}, 3000)
	}, [error])
	return (
		<div className="container-fluid">
			<div className="row mt-3">
				<h3>Color Generator</h3>
				<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
				<button className="btn btn-dark" onClick={handleClick}>Generate Color</button>
				{error && <p>{`${errorMsg}`}</p>}
			</div>
			<div className="row">
			{ colors.map((color, index) => {
				return <div className={`${index > 10 ? 'text-light' : null} col-2 p-0`} key={index}><SingleColor color={color} /></div>
				})
			}
			</div>
		</div>
	)
}

export default App;