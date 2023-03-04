import React from 'react'
import CountTimer from './CountTimer'
import SmileImg from './SmileImg'
const Header = () => {
	return (
		<div className='header'>
			<CountTimer num={0} num2={0} num3={0} />
			<SmileImg />
			<CountTimer num={0} num2={4} num3={0} />
		</div>
	)
}

export default Header
