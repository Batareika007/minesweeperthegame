import React from 'react'
import {CountTimer} from './CounterTimer/CountTimer'
import { SmileBtn } from './SmileBtn'



export const Header = () => {
	return (
		<div className='header'>
			<CountTimer num={0} num2={4} num3={0}/>
			<SmileBtn/>
			<CountTimer num={0} num2={4} num3={0} />
		</div>
	)
}
