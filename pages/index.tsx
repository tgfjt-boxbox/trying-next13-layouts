import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'


const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Home!
        </h1>
      </main>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page