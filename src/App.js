import GlobalStyles from './globalStyles'
import styled from 'styled-components'

import blood from './assets/bg.png'

import xbox from './assets/projects/xbox.png'
import xboxMobile from './assets/projects/xbox-mobile.png'
import hbo from './assets/projects/hbo.png'
import hboMobile from './assets/projects/hbo-mobile.png'
import wb from './assets/projects/wb.png'
import baja from './assets/projects/baja-fresh.png'
import lyft from './assets/projects/lyft.png'
import postmates from './assets/projects/postmates.png'
// import redbox from './assets/projects/redbox.png'
// import soundcloud from './assets/projects/soundcloud.png'

import react from './assets/skills/react.png'
import vue from './assets/skills/vue.png'
import sass from './assets/skills/sass.png'
import tailwind from './assets/skills/tailwind.png'

const StyledApp = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	padding: 1rem;
	background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);
	background-image: linear-gradient(to bottom, #fc575e, #90d5ec 0%, #fc575e 74%);
	position: relative;
	z-index: 2;
	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto 812px auto auto;
	}
	#gore {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 550px;
		clip-path: polygon(
			100% 0%,
			0% 0%,
			0% 65%,
			1% 64.95%,
			2% 64.8%,
			3% 64.6%,
			4% 64.3%,
			5% 63.9%,
			6% 63.45%,
			7% 62.9%,
			8% 62.25%,
			9% 61.55%,
			10% 60.8%,
			11% 59.95%,
			12% 59.05%,
			13% 58.1%,
			14% 57.1%,
			15% 56.05%,
			16% 55%,
			17% 53.9%,
			18% 52.8%,
			19% 51.65%,
			20% 50.5%,
			21% 49.35%,
			22% 48.2%,
			23% 47.05%,
			24% 45.9%,
			25% 44.8%,
			26% 43.75%,
			27% 42.75%,
			28% 41.75%,
			29% 40.8%,
			30% 39.9%,
			31% 39.1%,
			32% 38.35%,
			33% 37.65%,
			34% 37.05%,
			35% 36.5%,
			36% 36.05%,
			37% 35.65%,
			38% 35.35%,
			39% 35.15%,
			40% 35.05%,
			41% 35%,
			42% 35.05%,
			43% 35.2%,
			44% 35.45%,
			45% 35.75%,
			46% 36.15%,
			47% 36.65%,
			48% 37.2%,
			49% 37.85%,
			50% 38.55%,
			51% 39.35%,
			52% 40.2%,
			53% 41.1%,
			54% 42.05%,
			55% 43.05%,
			56% 44.1%,
			57% 45.15%,
			58% 46.3%,
			59% 47.4%,
			60% 48.55%,
			61% 49.7%,
			62% 50.85%,
			63% 52%,
			64% 53.15%,
			65% 54.25%,
			66% 55.35%,
			67% 56.4%,
			68% 57.45%,
			69% 58.4%,
			70% 59.35%,
			71% 60.2%,
			72% 61.05%,
			73% 61.8%,
			74% 62.45%,
			75% 63.05%,
			76% 63.6%,
			77% 64.05%,
			78% 64.4%,
			79% 64.7%,
			80% 64.85%,
			81% 65%,
			82% 65%,
			83% 64.9%,
			84% 64.75%,
			85% 64.5%,
			86% 64.2%,
			87% 63.75%,
			88% 63.25%,
			89% 62.7%,
			90% 62.05%,
			91% 61.3%,
			92% 60.5%,
			93% 59.65%,
			94% 58.75%,
			95% 57.8%,
			96% 56.8%,
			97% 55.75%,
			98% 54.65%,
			99% 53.55%,
			100% 52.4%
		);
		background-image: url(${blood});
		z-index: -1;
	}
	h2 {
		@media (min-width: 768px) {
			grid-column: 1/5;
			font-size: 220%;
		}
	}
	p:nth-of-type(1) {
		@media (min-width: 768px) {
			/* grid-row: 2; */
			grid-column: 1/3;
		}
	}
	h2,
	p {
		text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
	}
	p {
		font-size: 115%;
		font-weight: 500;
		opacity: .95;
		@media (min-width: 768px) {
			grid-row-start: 2;
		}
	}
	.project {
		max-width: 100%;
		border-radius: 4px;
		margin-bottom: .25rem;
		overflow: hidden;
		cursor: pointer;
    height: 100%;
		/* min-height: 100%; */
		width: 100%;
		object-fit: cover;
    object-position: top center;
		@media (min-width: 768px) {
			margin-bottom: 0;
		}
		&:first-of-type {
			@media (min-width: 768px) {
				grid-column: 1/4;
			}
		}
		&:is(:nth-of-type(2), :nth-of-type(3)) {
			display: none;
			@media (min-width: 768px) {
				display: block;
			}
		}
		&:nth-of-type(4) {
			@media (min-width: 768px) {
				grid-column: 2/5;
			}
		}
	}
	#technologies {
		@media (min-width: 768px) {
      grid-row: 4;
			grid-column: 1/5;
      padding: 1rem;
      text-align: center;
		}

		#tech {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
      @media (min-width: 768px) {
        gap: 2rem;
        justify-content: center;
      }
			#icon {
				background-color: #fff;
				border-radius: 99999px;
				aspect-ratio: 1/1;
				display: grid;
				place-items: center;
				&:nth-of-type(2) {
					img {
						transform: scale(1.1);
					}
				}
				.tech {
					max-width: 90px;
					transform: scale(.7);
					&:nth-of-type(4) {
						transform: scale(.65);
					}
					&:nth-of-type(1) {
					}
				}
			}
		}
	}
  footer {
    font-size: 80%;
    text-align: center;
    width: 100%;
    grid-column: 1/5;
  }
`

const App = () => {
	const projects = [ xbox, xboxMobile, hboMobile, hbo, wb, baja, lyft, postmates ]
	const technologies = [ vue, react, sass, tailwind ]
	return (
		<StyledApp>
			<GlobalStyles />
			<div id="gore" />
			<h2>SuperVision Design</h2>
			<p>Conscious & friendly web development</p>
			{projects.map((project, i) => (
				<img className="project" key={i} src={project} alt="project" />
			))}
			<div id="technologies">
				<p>Building pleasant interfaces with the following technologies: </p>
				<div id="tech">
					{technologies.map((tech, i) => (
						<div key={i} id="icon">
							<img className="tech" src={tech} alt="technology" />
						</div>
					))}
				</div>
			</div>
      <footer>
        <p>&copy; 2021 SuperVision Design</p>
      </footer>
		</StyledApp>
	)
}

export default App
