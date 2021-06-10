import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media(max-width: 1080px) {
      font-size: 60%;
    }

    @media(max-width: 720px) {
      font-size: 57%;
    }   
  }

  body {
    font: 400 16px Roboto, sans-serif;
  }
`