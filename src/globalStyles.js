import { createGlobalStyle } from "styled-components";
import streets from "./assets/streets.jpg";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        background-color: red;
        display: flex;
        flex-flow: column;
        align-items: center;
        /* justify-content: center; */

        height: 100vh;
        overflow: hidden;
        color: white;
        background-image: url(${streets});
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
           
            background-color: #bd4f6c;
background-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%), linear-gradient(315deg, #a40606 0%, #d98324 74%);
 ;
opacity: .4;

            z-index: -1;
        }
    }
    button, svg, a {
        cursor: pointer;
    }
`;

export default GlobalStyles;
