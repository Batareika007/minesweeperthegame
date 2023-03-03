import React from 'react'
import s from './Header.module.css'
const Header = () => {
	const numbersCount = [
		'sprite_num0',
		'sprite_num1',
		'sprite_num2',
		'sprite_num3',
		'sprite_num4',
		'sprite_num5',
		'sprite_num6',
		'sprite_num7',
		'sprite_num8',
		'sprite_num9',
	]

	return (
		<div className={s.header}>
			<div className={s.header__part}>
				<div className={`sprite sprite_num_size ${numbersCount[0]}`}></div>
				<div className={`sprite sprite_num_size ${numbersCount[3]}`}></div>
				<div className={`sprite sprite_num_size ${numbersCount[8]}`}></div>
			</div>
			<div className={s.header__part}>
				<div
					className={`sprite sprite_smile_size sprite_smile_regular`}></div>
			</div>
			<div className={s.header__part}>
				<div className={`sprite sprite_num_size ${numbersCount[0]}`}></div>
				<div className={`sprite sprite_num_size ${numbersCount[4]}`}></div>
				<div className={`sprite sprite_num_size ${numbersCount[0]}`}></div>
			</div>
		</div>
	)
}

export default Header
