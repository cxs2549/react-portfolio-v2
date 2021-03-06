import styled from 'styled-components'
import Carousel from '../Carousel/Carousel'

import coke from '../../assets/projects/coke.png'
import tubi from '../../assets/projects/tubi.png'
import showtime from '../../assets/projects/showtime.png'
// import motel6 from '../../assets/projects/motel6.png'
import marriott from '../../assets/projects/marriott.png'
import arbys from '../../assets/projects/arbys.png'
import deltaco from '../../assets/projects/del-taco.png'
import carvana from '../../assets/projects/carvana.png'
import xbox from '../../assets/projects/xbox.png'
import hbo from '../../assets/projects/hbo.png'
import wb from '../../assets/projects/wb.png'

const StyledApp = styled.div`
	display: flex;
	flex-flow: column;
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	border-radius: 13px;
	position: relative;
	z-index: 0;
	border: none;
	border-radius: 13px;
	margin-top: 2rem;
	@media (min-width: 640px) {
		margin-top: 0;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100px 400px auto auto;
	}
	@media (min-width: 768px) {
		gap: .5rem;
	}
	@media (min-width: 1280px) {
		border-radius: 13px;
		/* display: none; */
	}

	#slides {
		margin: 0 auto;
		max-width: 100%;
	}
	.box {
		max-width: 100vw;
		.carousel-item {
			padding: 0 1rem;
			border-radius: 3px;
			background-color: transparent;

			@media (min-width: 768px) {
				padding: 0;
			}
		}
		.carousel-image {
			object-position: top;
			border-radius: 3px;
			height: 100%;
			max-width: 900px !important;
		}
		#thumbnail-div {
			display: flex;
			grid-template-columns: repeat(4, 1fr);
			gap: 8px;
			justify-content: center;
			flex-wrap: wrap;
			padding: 0 1rem;
			img {
				border-radius: 3px;
				cursor: pointer;
			}
			.thumbnail {
				max-width: 50px;
				@media (min-width: 640px) {
					max-width: 75px;
				}
			}
		}
		.prev,
		.next {
			font-size: 2.5rem;
			@media (min-width: 640px) {
				display: block;
			}
		}
		.prev {
			left: -2rem;
			@media (min-width: 640px) {
				left: -3.5rem;
			}
		}
		.next {
			right: -2rem;
			@media (min-width: 640px) {
				right: -3.5rem;
			}
		}
	}
`

const App = () => {
	const projectsDesktop = [
		{ image: coke, url: 'https://cxs2549.github.io/react-coke/' },
		{ image: tubi, url: 'https://cxs2549.github.io/react-tubi/' },
		{ image: showtime, url: 'https://cxs2549.github.io/react-showtime/' },
		// { image: motel6, url: 'https://cxs2549.github.io/react-motel6/' },
		{ image: marriott, url: 'https://cxs2549.github.io/react-marriott/' },
		{ image: arbys, url: 'https://cxs2549.github.io/react-arbys/' },
		{ image: deltaco, url: 'https://cxs2549.github.io/react-del-taco/' },
		{ image: carvana, url: 'https://cxs2549.github.io/react-carvana/' },
		{ image: xbox, url: 'https://cxs2549.github.io/react-xbox/' },
		{ image: hbo, url: 'https://cxs2549.github.io/react-hbo-max-v2/' },
		{ image: wb, url: 'https://cxs2549.github.io/react-wb/' }
	]

	// const technologies = [ vue, react, sass, tailwind ]

	return (
		<StyledApp>
			<div id="slides">
				<Carousel
					data={projectsDesktop}
					time={4000}
					width="900px"
					height="480px"
					radius="10px"
					captionPosition="bottom"
					automatic={true}
					dots={false}
					pauseIconColor="blue"
					pauseIconSize="40px"
					slideBackgroundColor="transparent"
					slideImageFit="cover"
					thumbnails={true}
					thumbnailWidth="100px"
					style={{
						textAlign: 'center',
						maxWidth: '100%',
						maxHeight: '500px',
						margin: '0px auto'
					}}
				/>
			</div>
		</StyledApp>
	)
}

export default App
