import style from './Smile.module.css'
export function SmileBtn({clickSmile}) {
	return (
		<div>
			<div className={`sprite ${style.size} ${style.regular}`} onClick={clickSmile} ></div>
		</div>
	)
}
