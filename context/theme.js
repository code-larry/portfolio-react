import React, {createContext, useState} from 'react'

export const Theme = createContext();

const ThemeProvider = (props) => {

	const [theme, setTheme] = useState(false)

	const toggleTheme = () => {
		setTheme(!theme)
	}

	return (
		<Theme.Provider value={{theme, toggleTheme}}>
			{props.children}
		</Theme.Provider>
	)
}

export default ThemeProvider;