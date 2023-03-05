import style from './Smile.module.css'
import { useState } from 'react'

export function SmileBtn({ createNewBoard}) {
	const [smileMood, setSmileMood] = useState(style.regular)

	function clickSmile2() {
		return setSmileMood(style.regular)
	}
	
	function clickedSmile() {
		return setSmileMood(style.regularPressed)
	}


	return (
			<div
				className={`${style.size} ${smileMood}`}
				onClick={() => {
					clickSmile2()
					createNewBoard()
				}}
				onMouseDown={clickedSmile}
				></div>
		
	)
}
