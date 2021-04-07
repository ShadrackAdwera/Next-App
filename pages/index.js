import Head from 'next/head'

import Hero from '../components/home/hero/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}
