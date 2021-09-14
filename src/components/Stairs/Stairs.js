import styled from 'styled-components'
import showtime from '../../assets/projects/showtime.png'
import marriott from '../../assets/projects/marriott.png'
import motel6 from '../../assets/projects/motel6.png'
import arbys from '../../assets/projects/arbys.png'
import deltaco from '../../assets/projects/del-taco.png'
import carvana from '../../assets/projects/carvana.png'
import xbox from '../../assets/projects/xbox.png'
import hbo from '../../assets/projects/hbo.png'
import wb from '../../assets/projects/wb.png'
const StyledStairs = styled.div`
	gap: 1rem;
	overflow-y: scroll;
	height: calc(100vh - 180px);
	> div {
		background-size: cover;
		img {
            border-radius: 13px;
			min-width: 400px;
            object-fit: cover;
            object-position: top center;
			height: 250px;
		}
	}
`
const Stairs = () => {
	const projectsDesktop = [
		{ image: showtime, url: 'https://cxs2549.github.io/react-showtime/' },
		{ image: arbys, url: 'https://cxs2549.github.io/react-arbys/' },
		{ image: motel6, url: 'https://cxs2549.github.io/react-motel6/' },
		{ image: marriott, url: 'https://cxs2549.github.io/react-marriott/' },
		{ image: deltaco, url: 'https://cxs2549.github.io/react-del-taco/' },
		{ image: carvana, url: 'https://cxs2549.github.io/react-carvana/' },
		{ image: xbox, url: 'https://cxs2549.github.io/react-xbox/' },
		{ image: hbo, url: 'https://cxs2549.github.io/react-hbo-max-v2/' },
		{ image: wb, url: 'https://cxs2549.github.io/react-wb/' }
	]
	return (
		<StyledStairs className="hidden xl:grid grid-cols-2  max-w-6xl">
			{projectsDesktop.map((proj, i) => (
				<div id={`project-${i}`} key={i}>
					<a href={proj.url} target="_blank" rel="noreferrer">
						<img src={proj.image} alt="" />
					</a>
				</div>
			))}
		</StyledStairs>
	)
}
export default Stairs
