import React from 'react'
import CountTimer from './CountTimer'
import SmileImg from './SmileImg'
const Header = () => {
	const regular = 'sprite_smile_regular'
	const pressed = 'sprite_smile_regular_pressed'
	const exciting = 'sprite_smile_exciting'
	const coll = 'sprite_smile_cool'
	const dead = 'sprite_smile_dead'

	return (
		<div className='header'>
			<CountTimer num={0} num2={0} num3={0} />
			<SmileImg smileMood={regular} />
			<CountTimer num={0} num2={4} num3={0} />
		</div>
	)
}

export default Header
