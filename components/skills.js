import React from 'react'
import styles from '../styles/Skills.module.css'

export const Skills = () => {
	return (
		<section className={styles.skills} id="skills">
			<h2 className={styles.h2}>Skills</h2>
			<div className={styles.skills__items}>
				<div className={styles.skills__item__left}>
					<table className={styles.table}>
						<thead className={styles.thead}>
							<tr>
								<th colSpan="2" className={styles.th}>Hard Skills</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className={styles.td}>HTML</td>
								<td className={styles.td}>CSS</td>
							</tr>
							<tr>
								<td className={styles.td}>JavaScript</td>
								<td className={styles.td}>Bootstrap</td>
							</tr>
							<tr>
								<td className={styles.td}>PHP</td>
								<td className={styles.td}>Symfony</td>
							</tr>
							<tr>
								<td className={styles.td}>Lumen</td>
								<td className={styles.td}>GIT</td>
							</tr>
							<tr>
								<td className={styles.td}>Ubuntu</td>
								<td className={styles.td}>MacOS</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className={styles.skills__item__center}>
					<i className="fas fa-cogs"></i>
				</div>
				
				<div className={styles.skills__item__right}>
					<div>
						<table className={styles.table}>
							<thead className={styles.thead}>
								<tr>
									<th className={styles.th}>Languages</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className={styles.td}>French (Native speaker)</td>
								</tr>
								<tr>
									<td className={styles.td}>English (C1 level)</td>
								</tr>
								<tr>
									<td className={styles.td}>Spanish (B2 level)</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div>
						<table className={styles.table}>
							<thead className={styles.thead}>
								<tr>
									<th className={styles.th}>Soft Skills</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className={styles.td}>Adaptability</td>
								</tr>
								<tr>
									<td className={styles.td}>Communication</td>
								</tr>
								<tr>
									<td className={styles.td}>Stress Management</td>
								</tr>
								<tr>
									<td className={styles.td}>Team Work</td>
								</tr>
								<tr>
									<td className={styles.td}>Curiosity</td>
								</tr>		
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	)
}