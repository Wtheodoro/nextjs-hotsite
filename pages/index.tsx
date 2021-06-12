import React from 'react'
import Head from 'next/head'
import Initial from '../src/views/Initial'
import Uncomplicated from '../src/views/Uncomplicated'
import HowItWorks from '../src/views/HowItWorks'
import SellNow from '../src/views/SellNow'
import About from '../src/views/About'
import WhatsappFixed from '../src/components/SVGs/WhatsappFixed'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>André Veículos</title>
      </Head>

      <main>
        <Initial />
        <Uncomplicated />
        <HowItWorks />
        <SellNow />
        <About />
        <WhatsappFixed />
      </main>
    </>
  )
}

export default Home
