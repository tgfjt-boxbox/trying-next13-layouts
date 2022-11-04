import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../layouts/layout'
import AboutLayout from '../../layouts/about/layout'
import type { NextPageWithLayout } from '../_app'
import { ReactElement } from 'react'


const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to About!
        </h1>
      </main>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutLayout>
        {page}
      </AboutLayout>
    </Layout>
  )
}

export default Page