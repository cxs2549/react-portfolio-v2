import styled from 'styled-components'

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	/* border: 2px solid white; */
	h2 {
	}
	h2 {
		font-size: 220%;
		padding: 0 1rem;
		line-height: 1;
		text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
		@media (min-width: 640px) {
			padding: 0 2rem;
		}
		@media (min-width: 768px) {
			font-size: 440%;
		}
		@media (min-width: 1280px) {
			font-size: 440%;
		}
	}
`
const Header = () => {
	return (
		<StyledHeader>
			<h2>phobia Webworks</h2>
		</StyledHeader>
	)
}
export default Header
