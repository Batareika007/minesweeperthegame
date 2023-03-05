import React from 'react'
import style from './Header.module.css'
import { CountTimer } from './CounterTimer/CountTimer'
import { SmileBtn } from './SmileBtn'

export const Header = ({ clickSmile }) => {
	return (
		<div className={style.header}>
			<CountTimer num={0} num2={4} num3={0} />
			<SmileBtn clickSmile={clickSmile} />
			<CountTimer num={0} num2={4} num3={0} />
		</div>
	)
}
