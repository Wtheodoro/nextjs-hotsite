import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
