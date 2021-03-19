import React from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {

	return (
		<header>
			<nav className={styles.navbar}>
				<Link href="/">
					<a className={styles.navbar__item__btn}>Home</a>
				</Link>
				<ScrollLink activeClass={styles.active} to="skills" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Skills</ScrollLink>
				<ScrollLink activeClass={styles.active} to="projects" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Projects</ScrollLink>
				<ScrollLink activeClass={styles.active} to="exp" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Experiences</ScrollLink>
				<Link href="/contact">
					<a className={styles.navbar__item__btn}>Contact</a>
				</Link>
			</nav>
		</header>
	)
}