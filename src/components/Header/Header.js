import styled from 'styled-components'

const StyledHeader = styled.div`
	display: flex;
	flex-flow: column;
	margin-bottom: 1rem;
	/* border: 2px solid white; */
	/* background-color: rgba(0,0,0,.4); */
	border-radius: 13px;
	margin: 1rem;
	justify-content: center;
	/* align-items: center; */
	/* padding: 1rem; */
	@media (min-width: 640px) {
		margin: 2rem 0;
	}

	h2 {
	}
	h2 {
		font-size: 220%;
		line-height: 1;
		text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);

		@media (min-width: 768px) {
			font-size: 300%;
		}
		@media (min-width: 1280px) {
			font-size: 340%;
		}
	}
	h3 {
		/* background-color: #ff4e00; */
		border-radius: 3px;
		padding: 0 .5rem;
		background-image: linear-gradient(to right, #ff4e00 0%, transparent 74%);
	}
`
const Header = () => {
	return (
		<StyledHeader>
			<h2 className="capitalize"> cliff sanchez</h2>
			<h3 className="md:text-lg xl:text-xl font-medium ">los angeles, ca</h3>
		</StyledHeader>
	)
}
export default Header
