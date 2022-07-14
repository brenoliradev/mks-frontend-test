/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }

  * {
  scrollbar-width: thin;
scrollbar-color: #bfbfbf #ffffff;
}

/* Chrome, Edge, and Safari */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0f52ba;
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 3px;
  border: 4px solid #fff;
}
`

export default GlobalStyles
