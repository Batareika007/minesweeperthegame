import React from 'react'
import s from '../../components/Sprite.module.css'
import s2 from './Header.module.css'
const Header = () => {
	
	return (
		
		<div className={s2.header}>
			<div className={s2.header__part}>
				<div
					className={`${s.sprite} ${s.sprite_num_size} ${s.sprite_num0}`}></div>
				<div
					className={`${s.sprite} ${s.sprite_num_size} ${s.sprite_num4}`}></div>
				<div
					className={`${s.sprite} ${s.sprite_num_size} ${s.sprite_num0}`}></div>
			</div>
			<div className={s2.header__part} >
				<div className={`${s.sprite} ${s.sprite_smile_size} ${s.sprite_smile_regular}`}></div>
			</div>
			<div className={s2.header__part}>
				<div
					className={`${s.sprite} ${s.sprite_num_size} ${s.sprite_num0}`}></div>
				<div
					className={`${s.sprite} ${s.sprite_num_size} ${s.sprite_num0}`}></div>
				<div
					className={`${s.sprite} ${s.sprite_num_size} ${s.sprite_num1}`}></div>
			</div>
		</div>
	)
}

export default Header
