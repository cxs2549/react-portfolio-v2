import GlobalStyles from "./globalStyles";
import styled from "styled-components";
import Carousel from "./components/Carousel/Carousel";

import bg from "./assets/cl.png";

import xbox from "./assets/projects/xbox.png";
import xboxMobile from "./assets/projects/xbox-mobile.png";
import hbo from "./assets/projects/hbo.png";
import hboMobile from "./assets/projects/hbo-mobile.png";
import wb from "./assets/projects/wb.png";
import wbMobile from "./assets/projects/wb-mobile.png";
import baja from "./assets/projects/baja-fresh.png";
import postmates from "./assets/projects/postmates.png";

import react from "./assets/skills/react.png";
import vue from "./assets/skills/vue.png";
import sass from "./assets/skills/sass.png";
import tailwind from "./assets/skills/tailwind.png";
import Header from "./components/Header/Header";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  padding: 1rem 0;
  padding-bottom: 0;

  background-color: #f5d020;
  background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
  background-color: #0cbaba;
  background-image: linear-gradient(-315deg, #0cbaba 0%, #380036 74%);

  position: relative;
  z-index: 0;
  border: none;
  overflow: hidden;
  @media (min-width: 640px) {
		grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 400px auto auto;
  }
	@media (min-width: 768px) {
		gap: .5rem;

	}
  @media (min-width: 1280px) {
    height: 93.5vh;
    border-radius: 13px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    margin-top: 2rem;
  }
  #gore {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70vh;
    @media (min-width: 1280px) {
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
      height: 120vh;
    }
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

    background-image: url(${bg});
    z-index: -1;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #63d471;
      background-image: linear-gradient(315deg, #63d47091 0%, #23332975 74%);
      background-color: #bfe299;
      background-image: linear-gradient(315deg, #bfe299 0%, #66b5f6 74%);

      height: 100%;
    }
  }

  #slides {
    margin: 0 auto;
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
      /* border-radius: 99px; */
      border-radius: 3px;
      height: 100%;
      max-width: 900px !important;
    }
    #thumbnail-div {
      display: flex;
      justify-content: center;
      max-width: 100vw;
      /* margin-bottom: 1rem; */
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

  #technologies {
    background-color: transparent;

    @media (min-width: 640px) {
      margin-top: 6rem;
    }
    padding: 0 1rem;
    p {
      font-size: 140%;
      font-weight: 500;
      text-align: center;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
      @media (min-width: 1280px) {
        font-size: 180%;
      }
    }
    @media (min-width: 768px) {
      grid-column: 1/2;
      padding: 1rem;
      text-align: center;
    }

    #tech {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 0;
      max-width: 360px;
      margin: 0 auto;
      @media (min-width: 768px) {
        gap: 2rem;
        justify-content: center;
      }
      #icon {
        background-color: white;
        border-radius: 99999px;
        aspect-ratio: 1/1;
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        w &:nth-of-type(2) img {
          transform: scale(0.8);
        }
        &:nth-of-type(3) img {
          transform: scale(0.6);
        }
        img {
          max-width: 80px;
          transform: scale(0.6);
        }
      }
    }
  }
  footer {
    font-size: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    margin-top: auto;
    background-color: #c8221b;
  }
`;

const App = () => {
  const projectsDesktop = [
    { image: xbox, url: "https://cxs2549.github.io/react-xbox/" },
    { image: hbo, url: "https://cxs2549.github.io/react-hbo-max-v2/" },
    { image: wb, url: "https://cxs2549.github.io/react-wb/" },
    { image: baja, url: "https://cxs2549.github.io/react-baja-fresh/" },
    { image: postmates, url: "https://vue-postmates.netlify.app/" },
  ];
  const projectsMobile = [
    { image: xboxMobile },
    { image: hboMobile },
    { image: wbMobile },
  ];
  const technologies = [vue, react, sass, tailwind];

  return (
    <StyledApp>
      <GlobalStyles />
      <div id="gore" />
      <Header />

      <div id="slides">
        <Carousel
          data={projectsDesktop}
          time={4000}
          width="900px"
          height="500px"
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
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "500px",
            margin: "0px auto",
          }}
        />
      </div>

      <div id="technologies">
        <p>
          Building pleasant interfaces with the <br /> following technologies:{" "}
        </p>
        <div id="tech">
          {technologies.map((tech, i) => (
            <div key={i} id="icon">
              <img className="tech" src={tech} alt="technology" />
            </div>
          ))}
        </div>
      </div>
    </StyledApp>
  );
};

export default App;
