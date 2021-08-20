import styled from 'styled-components'
const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
	h2 {
		@media (min-width: 768px) {
			font-size: 220%;
		}
	}
	h2 {
		padding: 0 1rem;
		line-height: 1;
		text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
		@media (min-width: 640px) {
			padding: 0 2rem;
		}
		@media (min-width: 1280px) {
			font-size: 240%;
		}
	}
	p {
		font-size: 96%;
		line-height: 1;
		font-weight: 500;
		opacity: 0.95;
		text-align: end;
		grid-column: 2/3;
		white-space: nowrap;
		padding-right: 2rem;
		@media (min-width: 640px) {
			font-size: 115%;
		}
		@media (min-width: 768px) {
			font-size: 130%;
		}
		@media (min-width: 1280px) {
			font-size: 180%;
		}
	}
`
const Header = () => {
	return (
		<StyledHeader>
			<h2>
				SuperVision <br /> Design
			</h2>
			<p>
				Conscious & friendly web <br /> development
			</p>
		</StyledHeader>
	)
}
export default Header
