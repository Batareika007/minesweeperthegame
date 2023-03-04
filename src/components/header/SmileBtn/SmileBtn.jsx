import style from './Smile.module.css'
export function SmileBtn() {
	return (
		<div className='header__part'>
			<div className={`sprite ${style.size} ${style.regular}`}></div>
		</div>
	)
}
