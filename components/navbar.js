import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {

	const [toggleMenu, setToggleMenu] = useState(false)

	const toggleNavResponsive = () => {
		setToggleMenu(!toggleMenu)
	}
	
	useEffect(() => {
		const closeMobileMenu = () => {
			if(window.innerWidth > 700) {
				setToggleMenu(false)
			}
		}
	
		window.addEventListener('resize', closeMobileMenu)
	}, [])
	return (
		<header>
			<nav className={styles.navbar}>
				<div className={toggleMenu ? styles.blockBtn.show : styles.blockBtn} >
					<Link href="/">
					<a className={styles.navbar__item__btn}>Home</a>
					</Link>
					<ScrollLink activeClass={styles.active} to="skills" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Skills</ScrollLink>
					<ScrollLink activeClass={styles.active} to="projects" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Projects</ScrollLink>
					<ScrollLink activeClass={styles.active} to="exp" spy={true} smooth={true} duration={1000} className={styles.navbar__item__btn}>Experiences</ScrollLink>
					<Link href="/contact">
						<a className={styles.navbar__item__btn}>Contact</a>
					</Link>
				</div>	
			</nav>
			<div className={styles.button} onClick={toggleNavResponsive}>
			{toggleMenu ? (
					<i className="fas fa-times" aria-hidden="true"></i>
				) : (
					<i className="fa fa-bars" aria-hidden="true"></i>
				)
			}
			</div>
		</header>
	)
}