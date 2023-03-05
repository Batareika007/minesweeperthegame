import style from './Count.module.css'
export function CountTimer({ num, num2, num3 }) {
	const numbersCount = [
		style.num0,
		style.num1,
		style.num2,
		style.num3,
		style.num4,
		style.num5,
		style.num6,
		style.num7,
		style.num8,
		style.num9,
	]
	return (
		<div>
			<div className={`${numbersCount[num]} ${style.size} sprite`}></div>
			<div className={`${numbersCount[num2]} ${style.size} sprite`}></div>
			<div className={`${numbersCount[num3]} ${style.size} sprite`}></div>
		</div>
	)
}
