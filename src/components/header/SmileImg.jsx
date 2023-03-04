import React from 'react'

function SmileImg({ smileMood }) {
	return (
		<div className='header__part'>
			<div className={`sprite sprite_smile_size ${smileMood}`}></div>
		</div>
	)
}

export default SmileImg
