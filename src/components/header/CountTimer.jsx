function CountTimer({ num, num2, num3 }) {
	const numbersCount = [
		'sprite sprite_num_size sprite_num0',
		'sprite sprite_num_size sprite_num1',
		'sprite sprite_num_size sprite_num2',
		'sprite sprite_num_size sprite_num3',
		'sprite sprite_num_size sprite_num4',
		'sprite sprite_num_size sprite_num5',
		'sprite sprite_num_size sprite_num6',
		'sprite sprite_num_size sprite_num7',
		'sprite sprite_num_size sprite_num8',
		'sprite sprite_num_size sprite_num9',
	]
	return (
		<div className='header__part'>
			<div className={`${numbersCount[num]}`}></div>
			<div className={`${numbersCount[num2]}`}></div>
			<div className={`${numbersCount[num3]}`}></div>
		</div>
	)
}

export default CountTimer
