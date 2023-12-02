import { PromptNav } from "@/component/common/prompt"
import Provider from "@/component/common/prompt/Provider"
import Footer from "@/component/shared/Footer"


export const metadata ={
    title:'Promtopia',
    description:'Discoer & share AI Prompts'
}
const Promptlayout = ({children}) => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
         <Provider>
         <PromptNav/>
         <div style={{ flex: 1 }}>
         {children}
         </div>
         <Footer/>
         </Provider> 
      </section>
    )
}

export default  Promptlayout
