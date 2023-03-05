import style from './Board.module.css'
export function Board({ createBoard }) {
	return <div className={style.Board}>{createBoard}</div>
}
