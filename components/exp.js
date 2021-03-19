import React from 'react'
import styles from '../styles/Exp.module.css'

export const Exp = () => {
	return (
		<section className={styles.experience} id="exp">
			<h2 className={styles.h2}>Experiences</h2>
			<div className={styles.timeline}>

				<div className={`${styles.timeline__container} ${styles.timeline__container__left}`}>
					<div className={`${styles.timeline__content} ${styles.timeline__content__left}`}>
						<h3 className={styles.h3}>O'Clock <i className="fas fa-graduation-cap"></i></h3>
						<p><time dateTime="2020-09">September 2020</time> - <time dateTime="2021-03">March 2021</time> <i className="far fa-clock"></i></p>
						<p>Full-time remote Bootcamp to get certified as a Fullstack Web & Mobile Developer.</p>
						<p>The complete program is available <a href="https://oclock.io/formations/developpeur-web" target="_blank" rel="noreferrer noopener">here</a>.</p>
					</div>
				</div>

				<div className={`${styles.timeline__container} ${styles.timeline__container__right}`}>
					<div className={`${styles.timeline__content} ${styles.timeline__content__right}`}>
						<h3 className={styles.h3}><i className="fas fa-globe-americas"></i> World Tour</h3>
						<p><i className="far fa-clock"></i> <time dateTime="2019-01">January 2019</time> - <time dateTime="2020-04">April 2020</time></p>
						<p>My wife and I travelled around the world in 19 countries through South East Asia, Australia, Western USA, South America, Central America and Europe.</p>
						<p>We took Spanish courses during 5 weeks in Peru and English courses during 6 weeks in Dublin. We obtained our Open Water Diver (Level 1) certifications in Koh Tao, Thailand.</p>
					</div>
				</div>

				<div className={`${styles.timeline__container} ${styles.timeline__container__left}`}>
					<div className={`${styles.timeline__content} ${styles.timeline__content__left}`}>
						<h3 className={styles.h3}>Gandi.net <i className="fas fa-briefcase"></i></h3>
						<p><time dateTime="2010-02">February 2014</time> - <time dateTime="2018-12">December 2018</time> <i className="far fa-clock"></i></p>
						<p>I worked as a Customer Support Agent in Domain Names and Web Hosting industry. Support was provided by email, phone and livechat, in French and English. In this position, I worked partially remotely.</p>
					</div>
				</div>

				<div className={`${styles.timeline__container} ${styles.timeline__container__right}`}>
					<div className={`${styles.timeline__content} ${styles.timeline__content__right}`}>
						<h3 className={styles.h3}><i className="fas fa-briefcase"></i> EuroDNS.com</h3>
						<p><i className="far fa-clock"></i> <time dateTime="2011-10">October 2011</time> - <time dateTime="2014-01">January 2014</time></p>
						<p>I worked as a Customer Support Agent in the Domain Names industry. Support was provided by email and phone, in French and English. </p>
					</div>
				</div>

				<div className={`${styles.timeline__container} ${styles.timeline__container__left}`}>
					<div className={`${styles.timeline__content} ${styles.timeline__content__left}`}>
						<h3 className={styles.h3}>University of Lorraine <i className="fas fa-graduation-cap"></i></h3>
						<p><time dateTime="2007-09">September 2007</time> - <time dateTime="2010-11">November 2010</time> <i className="far fa-clock"></i></p>
						<p>I graduated a Master's degree in European & International Trade and completed 2 internships abroad in Malta as an Export Agent during 4 months in 2009 and in Australia as a Travel Agent during 7 months in 2010.</p>
					</div>
				</div>
			</div>
		</section>
	)
}