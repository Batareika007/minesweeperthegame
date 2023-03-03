import s from '../../components/Sprite.module.css'
function EmptyMinePressed() {
	return (
		<div
			className={`${s.sprite} ${s.sprite_mine_size} ${s.sprite_mine_empty_pressed}`}></div>
	)
}

export default EmptyMinePressed
