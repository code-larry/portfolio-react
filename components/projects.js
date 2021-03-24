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
					<a href="#" target="_blank" rel="noreferrer noopener" className={styles.btn}>Agendigo</a>
				</div>
				<div className={styles.projects__item}>
					<a href="https://github.com/code-larry/portfolio-react" target="_blank" rel="noreferrer noopener" className={styles.btn}>Portfolio React</a>
				</div>
				<div className={styles.projects__item}>
					<a href="https://github.com/code-larry/ImmoReact" target="_blank" rel="noreferrer noopener" className={styles.btn}>Immo React</a>
				</div>
				<div className={styles.projects__item}>
					<a href="#" target="_blank" rel="noreferrer noopener" className={styles.btn}>Coming Soon</a>
				</div>
			</div>
		</section>
	)
}