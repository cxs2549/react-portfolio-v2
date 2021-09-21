import GlobalStyles from './globalStyles'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Slideshow from './components/Slideshow/Slideshow'
import Face from './components/Face/Face'
import Stairs from './components/Stairs/Stairs'

const StyledApp = styled.div`
	#top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 1rem;
    @media (min-width: 1280px) {
      padding-right: 0;
    }
		svg {
			font-size: 1.5rem;
		}
	}
`

const App = () => {
	return (
		<StyledApp>
			<GlobalStyles />
			<div id="top" className="gap-4">
				<Header />
				<div className="flex items-center gap-4">
					<a href="https://www.linkedin.com/in/cliff-sanchez-b75a201bb/" target="_blank">
						<i className="fa fa-linkedin" aria-hidden="true" />
					</a>
					<a href="https://github.com/cxs2549" target="_blank">
						<i className="fa fa-github" aria-hidden="true" />
					</a>
					<Face />
				</div>
			</div>
			<Slideshow />
			{/* <Stairs /> */}
		</StyledApp>
	)
}

export default App
