import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
// import Head from 'next/head'
// import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    </>
  )
}

export default Home
