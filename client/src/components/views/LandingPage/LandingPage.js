import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>挑戦</span>
            </div>
            <div style={{ float: 'right' }}>taheekimのホームページです</div>
        </>
    )
}

export default LandingPage
