import {useEffect, useState} from 'react';
const SingleColor = ({color}) => {
	
	const {weight, hex} = color;
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCopied(false);
		}, 3000)
	}, [copied])

	return (
		<div style={{height: '150px', backgroundColor : `#${color.hex}`}} onClick={() => {
			setCopied(true);
			navigator.clipboard.writeText(`#${hex}`);
		}}>
			<p>{`${weight}%`}</p>
			<p className="hexValue">{`#${hex}`}</p>
			{copied && <p>{'COPIED TO CLIPBOARD'}</p>}
		</div>
	)
}

export default SingleColor;