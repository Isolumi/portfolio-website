import { useContext } from 'react'
import { ThemeContext } from '/src/contexts/ThemeContext.jsx'
import Header from '/src/components/sections/Header'
import Home from '/src/components/sections/Home'
import Projects from '/src/components/sections/Projects'
import Experience from '/src/components/sections/Experience'
import Stack from '/src/components/sections/Stack'
import Contact from '/src/components/sections/Contact'
import Footer from '/src/components/sections/Footer'
import ScrollToTop from '/src/components/elements/ScrollToTop'
import '/src/App.css'
import '/src/stylesheets/theme/theme.css'

function App() {
	const { theme } = useContext(ThemeContext)

	return (
		<div className='App' id='top' data-theme={theme}>
			<Header />
			<Home />
			<Projects />
            <Experience />
			<Stack />
			<Contact />
			<Footer />
			<ScrollToTop />
		</div>
	)
}

export default App
