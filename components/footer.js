import React, {useContext} from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import {Theme} from './context/theme'

export const Footer = () => {

	const {theme} = useContext(Theme)

	return (
		<footer>
			<div className={styles.contact}>
				<Link href="/contact">
					<a className={styles.contact__button}>Contact Me</a>
				</Link>
			</div>
		</footer>
	)
}