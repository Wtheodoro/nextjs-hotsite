import React from 'react'
import Head from 'next/head'
import Initial from '../views/Initial'
import Uncomplicated from '../views/Uncomplicated'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>André Veículos</title>
      </Head>

      <main>
        <Initial />
        <Uncomplicated />
      </main>
    </>
  )
}

export default Home
