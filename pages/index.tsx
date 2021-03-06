import React from 'react'
import Head from 'next/head'
import Initial from '../src/views/Initial'
import Uncomplicated from '../src/views/Uncomplicated'
import HowItWorks from '../src/views/HowItWorks'
import SellNow from '../src/views/SellNow'
import About from '../src/views/About'
import WhatsappFixed from '../src/components/SVGs/WhatsappFixed'
import NeedHelpPopUp from '../src/views/NeedHelpPopUp'
import { PopUpProvider } from '../src/hook/HelpPopUpContext'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Compra e venda de carros usados e semi novos em Campinas, Valinhos, Paulínia, Hortoândia, Sumaré e região." />
        <title>André Veículos</title>
      </Head>

      <PopUpProvider>
        <main>
          <Initial />
          <Uncomplicated />
          <HowItWorks />
          <SellNow />
          <About />
          <WhatsappFixed />

          <NeedHelpPopUp />
        </main>
      </PopUpProvider>
    </>
  )
}

export default Home
