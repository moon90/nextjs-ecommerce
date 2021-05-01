import React from 'react'
import Header from './components/Header/Header'
import TopBar from './components/TopBar/TopBar'

export default function Layout({children}) {
    return (
        <>
            <TopBar />
            <Header />
            {children}
            <InstagramFeed />
            <a href="#" id="back-to-top" title="Back to top" style={{display: "none"}}>&uarr;</a>
        </>
    )
}
