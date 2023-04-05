import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import Link from 'next/link'

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theaters/list")
  const theaterData = await theaterRequest.json()
  return {
    props: {
      theater: theaterData
    }
  }
}

export default function Home(props: any): JSX.Element {
  const side = typeof window ? 'client' : 'server'

  return (
    <div>
      Welcome, Youre currently on the {side}-side
      <br />
      <Link href="/about">About page</Link>
      <br />
      <Link href="/contact">Contact page</Link>
      <br />
      <Link href="/greeting/John?age=25">Greeting Page</Link>
      <br />
      {/* <Link href="/posts/2021-08-01/first-posts">Posts Page</Link> */}
      <Link href={{
        pathname: "/posts/[date]/[slug]",
        query: { date: "2021-08-01", slug: "first-post" }
      }}>
        Posts Page
      </Link>
    </div>
  )

}
