import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>Phone: +47 470 72 974.</p>
            <p>E-mail: <a href ="mailto:Sander.tonning13@gmail.com">Sander.tonning13@gmail.com</a></p>
            <p>Visit: Sagevegen 55, 6847 Vassenden.</p>
            </Layout>
        </div>
    )
}


export default ContactPage