import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Hello from "../components/Hello"

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full h-screen flex justify-center items-center">
                <Hello title="hello" />
            </main>
        </React.Fragment>
    )
}

export default Home
