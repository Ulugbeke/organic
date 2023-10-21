import React from 'react'
import Saidbar from './Saidbar'
import Main from './Main'
import Navbar from './Navbar'


export default function Layout() {
    return (
        <div className='Wrapper'>
           
            <Saidbar />
            <Main />
            
        </div>
    )
}
