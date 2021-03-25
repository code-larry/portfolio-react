import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [toggleMenu, setToggleMenu] = useState(false)

	const toggleNavResponsive = () => {
		setToggleMenu(!toggleMenu)
	}

	useEffect(() => {

		const changeWidth = () => {
			setWindowWidth(window.innerWidth)

			if(window.innerWidth > 700) {
				setToggleMenu(false)
			}
		}

		window.addEventListener('resize', changeWidth)

		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])

	return (
		<header>
			<nav className={styles.navbar}>
			{
				(toggleMenu || windowWidth > 700) && (
					<>
					<Link href="/">
					<a className={styles.navbar__item__btn}>Home</a>
					</Link>
					<ScrollLink activeClass={styles.active} to="skills" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Skills</ScrollLink>
					<ScrollLink activeClass={styles.active} to="projects" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Projects</ScrollLink>
					<ScrollLink activeClass={styles.active} to="exp" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Experiences</ScrollLink>
					<Link href="/contact">
						<a className={styles.navbar__item__btn}>Contact</a>
					</Link>
					</>
				)
			}
				
			</nav>
			<div className={styles.button} onClick={toggleNavResponsive}><i className="fa fa-bars" aria-hidden="true"></i></div>
		</header>
	)
}