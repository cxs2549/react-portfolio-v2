import styled from 'styled-components'

const StyledHeader = styled.div`
	display: flex;
	flex-flow: column;
	margin-bottom: 1rem;
	/* background-color: rgba(0,0,0,.4); */
	border-radius: 13px;
	margin: 1rem;
	justify-content: center;
	padding: 1rem;
	@media (min-width: 768px) {

	}
	h2 {
	}
	h2 {
		font-size: 220%;
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
			<h2> cliff sanchez</h2>
			<h3>los angeles, ca</h3>
		</StyledHeader>
	)
}
export default Header
