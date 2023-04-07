import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import NavigationPage from './navigation'
import Movies from './movies'

// export async function getServerSideProps() {
//   const theaterRequest = await fetch("http://localhost:8080/comments/list")
//   const theaterData = await theaterRequest.json()
//   console.log(theaterData)
//   return {
//     props: {
//       theater: theaterData
//     }
//   }
// }

export default function Home(props: any): JSX.Element {
  const side = typeof window ? 'client' : 'server'

  return (
    <div className="container md mx-auto">
      <div className="flex md bg-red mx-auto px-4">
        <img className={styles.headerImg} src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="" />
        <div className={styles.searchBarDiv}>
          <input className={styles.searchBar} type="text" placeholder='Search movies, TV, actors, more...' />
        </div>
        <div className='mx-auto'>
          <NavigationPage />
          {/* Welcome, Youre currently on the {side}-side */}
          <div className={styles.navigateLink} text-white >
            <br />
            <Link href="/about">About page</Link>
            <br />
            <Link href="/contact">Contact page</Link>
            <br />
            <Link href="/greeting/John?age=25">Greeting Page</Link>
            <br />
            <Link href={{
              pathname: "/posts/[date]/[slug]",
              query: { date: "2021-08-01", slug: "first-post" }
            }}>
              Posts Page
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-grey flex items-center md px-2">
        <h1 className='text-yellow font-bold'>
          TRENDING ON RT
        </h1>
        <div className='flex justify-evenly text-white' style={{ width: '300px' }} >
          <p>RT25</p>
          <p>Super Mario</p>
        </div>
      </div>
      <Movies />
    </div>
  )
}
