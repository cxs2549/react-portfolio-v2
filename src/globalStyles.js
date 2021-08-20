import { createGlobalStyle } from 'styled-components'

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
        background-color: #bf3a30;
background-image: linear-gradient(315deg, #bf3a30 0%, #864ba2 74%);
@media (min-width: 768px) {

    height: 118vh;
}

        color: white;
    }
    button, svg, a {
        cursor: pointer;
    }
`

export default GlobalStyles
