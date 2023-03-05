import style from './Board.module.css'
export function Board({ createBoard , smileExciting}) {
	return <div className={style.Board} onMouseDown={smileExciting}>{createBoard}</div>
}
