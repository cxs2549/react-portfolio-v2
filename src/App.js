import GlobalStyles from "./globalStyles";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import Face from "./components/Face/Face";

const StyledApp = styled.div`
	#top {
		display: flex;
		align-items: center;
	}
`;

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <div id="top">
        <Face />
        <Header />
      </div>
      <Slideshow />
    </StyledApp>
  );
};

export default App;
