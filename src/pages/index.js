import Head from 'next/head'

import Post from '../components/Post'

import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Posts
        </h1>

        <ul className={styles.posts}>
          <li>
            <Post content="Hey, I'm a new post!" date="6/4/22" />
          </li>
          <li>
            <Post content="I'm working in Figma trying to design a new website that shows all my tweets!" date="6/4/2022" />

          </li>
          <li>
            <Post content="I'm working in Figma trying to design a new website that shows all my tweets!" date="6/4/2022" />

          </li>
          <li>
            <Post content="I'm working in Figma trying to design a new website that shows all my tweets!" date="6/4/2022" />

          </li>
        </ul>

        
      </main>

      
    </div>
  )
}
