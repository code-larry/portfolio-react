import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export const Navbar = () => {

	return (
		<header>
			<nav className={styles.navbar}>
				<Link href="/">
					<a className={styles.navbar__item__btn}>Home</a>
				</Link>
				<a href="#skills" className={styles.navbar__item__btn}>Skills</a>
				<a href="#projects" className={styles.navbar__item__btn}>Projects</a>
				<a href="#experience" className={styles.navbar__item__btn}>Experiences</a>
				<Link href="/contact">
					<a className={styles.navbar__item__btn}>Contact</a>
				</Link>
			</nav>
		</header>
	)
}