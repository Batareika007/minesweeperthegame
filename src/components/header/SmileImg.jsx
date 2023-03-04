import React, { useState } from 'react'

function SmileImg({ changeImg }) {
	const [currentImage, setImage] = useState('sprite_smile_regular')
	
	return (
		<div className='header__part'>
			<div
				className={`sprite sprite_smile_size ${currentImage}`}
				onClick={() => {setImage(changeImg)	}}></div>
		</div>
	)
}

export default SmileImg
