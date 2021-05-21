import React, {useContext} from 'react'
import styles from '../styles/BtnToggleTheme.module.css'
import {Theme} from '../context/theme'

export default function btnToggleTheme() {

	const{toggleTheme, theme} = useContext(Theme)

	return (
		<button onClick={toggleTheme} className={theme ? styles.day : styles.night}>
			{theme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
		</button>
	)
}
