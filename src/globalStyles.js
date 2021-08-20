import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }
    body {
        font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
background-color: #61210f;
background-image: linear-gradient(315deg, #61210f 0%, #ee6c4d 74%);
background-color: #e3e3e3;
background-image: linear-gradient(147deg, #e3e3e3 0%, #d93965 74%);


        height: 100vh;
        overflow: hidden;
        color: white;
    }
    button, svg, a {
        cursor: pointer;
    }
`;

export default GlobalStyles;
