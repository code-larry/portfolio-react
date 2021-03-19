import React from 'react'
import styles from '../styles/Projects.module.css'

export const Projects = () => {
	return (
		<section className={styles.projects} id="projects">
			<h2 className={styles.h2}>Projects</h2>
			<div className={styles.projects__items}>
				<div className={styles.projects__item}>
					<a href="https://github.com/code-larry/portfolio.git" target="_blank" rel="noreferrer noopener" className={styles.btn}>Portfolio</a>
				</div>
				<div className={styles.projects__item}>
					<a href="https://github.com/code-larry/SymfonyShop" target="_blank" rel="noreferrer noopener" className={styles.btn}>SymfonyShop</a>
				</div>
				<div className={styles.projects__item}>
					<a href="#" target="_blank" rel="noreferrer noopener" className={styles.btn}>Agendigo (API)</a>
				</div>
				<div className={styles.projects__item}>
					<a href="https://github.com/code-larry/SandBox" target="_blank" rel="noreferrer noopener" className={styles.btn}>SandBox</a>
				</div>
				<div className={styles.projects__item}>
					<a href="#" target="_blank" rel="noreferrer noopener" className={styles.btn}>Coming Soon</a>
				</div>
			</div>
		</section>
	)
}