import Footer from '@/component/shared/Footer'
import ThemeRegistry from '@/component/style/ThemeRegistry'
import React from 'react'
import Appbar from './../../component/shared/Appbar'

export default function Generallayout ({children}) {
    return (
        <section  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
    
      
         <Appbar/>
         <div style={{ flex: 1 }}>
         {children}
         </div>
        <Footer/>
      </section>
    )
}


