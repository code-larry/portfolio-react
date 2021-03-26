import React, {useContext} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Theme} from '../components/context/theme'

export default function Home() {

	const {theme} = useContext(Theme)

  return (
	<>
	<Head>
			<title>Larry Basin - Enthusiastic FullStack Web Developer</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
	</Head>
	<div className={theme ? styles.home_container : styles.home_containerLight}>
		<header className={styles.header}>
			<div className={styles.header__item}>
				<h1 className={styles.header__item__title}>Larry Basin<span>.</span></h1>
				<p className={styles.header__item__para}>Enthusiastic Fullstack web developer</p>
			</div>
			<div className={styles.header__item}>
				<Link href="/details">
					<a href="details" className={styles.header__item__button}>Learn More</a>
				</Link>
			</div>
		</header>
	</div>
	</>
		
  )
}
