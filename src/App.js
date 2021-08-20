import GlobalStyles from "./globalStyles";
import styled from "styled-components";
import { Carousel } from "react-carousel-minimal";

import blood from "./assets/bg.png";

import xbox from "./assets/projects/xbox.png";
import xboxMobile from "./assets/projects/xbox-mobile.png";
import hbo from "./assets/projects/hbo.png";
import hboMobile from "./assets/projects/hbo-mobile.png";
import wb from "./assets/projects/wb.png";
import wbMobile from "./assets/projects/wb-mobile.png";
import baja from "./assets/projects/baja-fresh.png";
import lyft from "./assets/projects/lyft.png";
import postmates from "./assets/projects/postmates.png";

import react from "./assets/skills/react.png";
import vue from "./assets/skills/vue.png";
import sass from "./assets/skills/sass.png";
import tailwind from "./assets/skills/tailwind.png";

const StyledApp = styled.div`
height: 100vh;
  display: flex;
  flex-flow: column;
  max-width: 1200px;
  margin: 0 auto;
  /* align-items: center; */
  grid-template-columns: auto 1fr;
  grid-template-rows: 140px auto;
  gap: 1rem;
  padding: 1rem 0;
  background-image: linear-gradient(
    to bottom,
    #fc575e,
    #90d5ec 0%,
    #fc575e 74%
  );
  position: relative;
  z-index: 0;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 400px auto auto;
  }
  #gore {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 650px;
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
  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    h2 {
      @media (min-width: 768px) {
        font-size: 220%;
      }
    }
    h2,
    p {
			padding: 0 1rem;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    }
    p {
      font-size: 96%;
      font-weight: 500;
      opacity: 0.95;
      text-align: end;
      grid-column: 2/3;
      white-space: nowrap;
      @media (min-width: 640px) {
        font-size: 115%;
      }
      @media (min-width: 768px) {
        font-size: 130%;
      }
    }
  }
  .box {
		.carousel-item {
			padding: 0 1rem;
		}
	}
  /* #technologies {
    @media (min-width: 768px) {
      grid-column: 1/2;
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
          transform: scale(0.7);
          &:nth-of-type(4) {
            transform: scale(0.65);
          }
          &:nth-of-type(1) {
          }
        }
      }
    }
  } */
  footer {
    font-size: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    grid-column: 1/3;
    padding: 2rem 0;
		margin-top: auto;
    @media (min-width: 768px) {
      grid-column: 1/3;
    }
  }
`;

const App = () => {
  const projectsDesktop = [
		{image: xbox},
		{image: hbo},
		{image: wb},
		{image: baja},
		{image: postmates},
		{image: lyft},
    // xbox,
    // xboxMobile,
    // hboMobile,
    // hbo,
    // wb,
    // baja,
    // lyft,
    // postmates,
  ];
  const technologies = [vue, react, sass, tailwind];

  return (
    <StyledApp>
      <GlobalStyles />
      <div id="gore" />
      <div id="header">
        <h2>
          SuperVision <br /> Design
        </h2>
        <p>
          Conscious & friendly web <br /> development
        </p>
      </div>
      <Carousel
        data={projectsDesktop}
        time={4000}
        width="850px"
        height="500px"
        // captionStyle={captionStyle}
        radius="10px"
        // slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={false}
        pauseIconColor="blue"
        pauseIconSize="40px"
        slideBackgroundColor="transparent"
        slideImageFit="contain"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "500px",
          margin: "0px auto",
        }}
      />

      {/* <div id="projects">
        {projects.map((project, i) => (
          <div key={i} className="project">
            <img src={project} alt="project" />
          </div>
        ))}
      </div> */}
      {/* <div id="technologies">
				<p>Building pleasant interfaces with the following technologies: </p>
				<div id="tech">
					{technologies.map((tech, i) => (
						<div key={i} id="icon">
							<img className="tech" src={tech} alt="technology" />
						</div>
					))}
				</div>
			</div> */}
      <footer>
        <p>&copy; 2021 SuperVision Design</p>
      </footer>
    </StyledApp>
  );
};

export default App;
