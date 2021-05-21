import '../styles/globals.css'
import Head from 'next/head'
import ThemeProvider from '../context/theme'
import BtnToggle from '../components/btnToggleTheme'

function MyApp({ Component, pageProps }) {

	return(
		<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
		<ThemeProvider>
			<BtnToggle />
			<Component {...pageProps} />
		</ThemeProvider>
		</>
	)
}

export default MyApp
