import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
	return (
		<footer>
			<div className={styles.contact}>
				<Link href="/contact">
					<a href="contact" className={styles.contact__button}>Contact Me</a>
				</Link>
			</div>
		</footer>
	)
}