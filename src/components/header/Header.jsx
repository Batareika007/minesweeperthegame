
import { CountFlags } from './CounterTimer/CountFlags'
import { CountTimer } from './CounterTimer/CountTimer'
import style from './Header.module.css'
// import { CountTimer, CountFlags } from './CounterTimer/CountTimer'
import { SmileBtn } from './SmileBtn'

export const Header = ({ createNewBoard }) => {

	return (
		<div className={style.header}>
			<CountTimer num={0} num2={4} num3={0} />
			<SmileBtn createNewBoard={createNewBoard} />
			<CountFlags num={0} num2={4} num3={0} />
		</div>
	)
}
