import React from 'react'
import Head from 'next/head'
import {Navbar} from '../components/navbar'
import {Skills} from '../components/skills'
import {Projects} from '../components/projects'
import {Exp} from '../components/exp'
import {Footer} from '../components/footer'
import styles from '../styles/Details.module.css'

const Details = () => {
	return (
		<>
		<Head>
			<title>Larry Basin - Enthusiastic FullStack Web Developer</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
		</Head>
		<Navbar />
		<main className={styles.main}>
			<Skills title="Skills" id="skills"/>
			<Projects title="Projects" id="projects"/>
			<Exp title="Exp" id="exp"/>
		</main>
		<Footer />
		</>
	)
}

export default Details;