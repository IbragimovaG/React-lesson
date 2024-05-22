import React from 'react'
import Navbar from './components/navabar'
import Service from './components/service'
import Doctor from './components/doctor_info'
import Doctor2 from './components/doctor_info2'
import Open_times from './components/open_time'
import Register from './components/register'
import Rewievs from './components/rewievs'
import Footer from './components/Footer/footer'
export default function App() {
    return (
        <div>
            <Navbar/>
            <main>
                <h1> Safomed klinikasi </h1>
                <button> Bo'glanish </button>
            </main>
            <Service/>
            <Doctor/>
            <Doctor2/>
            <Open_times/>
            <Register/>
            <Rewievs/>
            <Footer/>
        </div>
    )
}
