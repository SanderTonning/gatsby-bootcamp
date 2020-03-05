import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title='About' />
            <h1>About</h1>
            <p>I'm Sander Tonning.</p>
            <p>I work for Sparebanken Sogn og Fjordane in Førde. I'm currently learning how to code.</p>
            <p></p>
            <p>My personal goal is to become a full stack developer and to one day own a company developing software. </p>
            <p>My other interests include computer games, sports, food and traveling.</p>
            <p>Want to work with me? <Link to="/contact">Reach out here.</Link></p>
            </Layout>
        </div>
    )
}


export default AboutPage
