'use client'
import Footer from '@/component/shared/Footer'
import React from 'react'
import Web3NavBar from '@/component/shared/Web3NavBar'
import { Provider } from 'react-redux'
import store from '@/services/store'


// export const metadata={
//     tittle:'folly crypto'
// }

const Contractlayout = ({children}) => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
        <Web3NavBar/>
        <Provider store={store}>
            <div style={{ flex: 1 }}>
            {children}
            </div>
        </Provider> 
         <Footer/>
      </section>
    )
}

export default  Contractlayout
