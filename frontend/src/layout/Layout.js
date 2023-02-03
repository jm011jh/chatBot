import Header from "./Header"
import Body from "./Body"
import './style.css'
export default function Layout(){
    return(
        <div className="layout">
            <Header/>
            <Body/>
        </div>
    )
}