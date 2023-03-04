import React from 'react'
import CountTimer from './CountTimer'
import SmileImg from './SmileImg'
const Header = ({smileImg}) => {
	return (
		<div className='header'>
			<CountTimer num={0} num2={0} num3={0} />
			<SmileImg changeImg={smileImg} />
			<CountTimer num={0} num2={4} num3={0} />
		</div>
	)
}

export default Header
