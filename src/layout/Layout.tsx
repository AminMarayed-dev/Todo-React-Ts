import { ReactNode } from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"


type Props = {
    children?:ReactNode
}

function Layout({children}: Props) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout