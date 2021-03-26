import React, {useContext} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'
import {Theme} from '../components/context/theme'

const Contact = () => {

	const {theme} = useContext(Theme)

	return (
		<>
		<Head>
			<title>Larry Basin - Enthusiastic FullStack Web Developer</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
		</Head>
		<div className={theme ? styles.contact_container : styles.contact_containerLight}>
			<header className={styles.header}>
				<div className={styles.header__item}>
					<div className={styles.header__item__img}>
						<img src="images/larry.jpg" alt="picture of Larry" />
					</div>
					<div className={styles.header__item__icons}>
						<a href="mailto:larry.basin@gmail.com" target="_blank" title="larry.basin@gmail.com"><i className="fas fa-envelope"></i></a>
						<a href="https://github.com/code-larry" target="_blank" rel="noreferrer noopener"><i className="fab fa-github-square"></i></a>
						<a href="https://www.linkedin.com/in/larrybasin/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin"></i></a>
						<a href="https://twitter.com/code_larry" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter-square"></i></a>
					</div>
				</div>
				<div className={styles.header__item}>
					<Link href="/details">
						<a className={styles.header__button}>Back to details</a>
					</Link>
					<a href="docs/resume.pdf" className={styles.header__button} target="_blank">Download my resume</a>
				</div>
			</header>
		</div>
		</>  
	)
}

export default Contact;