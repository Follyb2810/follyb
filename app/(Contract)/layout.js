import Footer from '@/component/shared/Footer'
import React from 'react'
import Web3NavBar from '@/component/shared/Web3NavBar'

const Contractlayout = ({children}) => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
         <Web3NavBar/>
         <div style={{ flex: 1 }}>
         {children}
         </div>
         <Footer/>
      </section>
    )
}

export default  Contractlayout
