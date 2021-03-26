import React, {useContext} from 'react'
import styles from '../styles/BtnToggleTheme.module.css'
import {Theme} from './context/theme'

export default function btnToggleTheme() {

	const{toggleTheme, theme} = useContext(Theme)

	return (
		<div onClick={toggleTheme} className={theme ? styles.day : styles.night}>
			{theme ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
		</div>
	)
}
