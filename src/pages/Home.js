import React, {Fragment} from 'react'

import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'


export const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
} 