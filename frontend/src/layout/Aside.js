import { useEffect, useRef, useState } from "react"
import useStore from "../store"
import axios from "axios"
import AsideNews from "./components/Aside_news"
import AsideContact from "./components/Aside_contact"
import AsideRecruit from "./components/Aside_recruit"
import AsideForms from "./components/Aside_forms"
import AsideHire from "./components/Aside_hire"
export default function Aside(){
    const aside = useRef()
    const {
        asideType,
        asideProp,
        asideOff,
        noticeNumber,
    } = useStore(state => state)
    useEffect(()=>{
        aside.current.scrollTo(0,0)
    },[asideProp])
    return(
        <div ref={aside} className={`aside aside--${asideProp ? "open" : "close"}`}>
            <div className="aside--closeBtn-wrap">
                <div className="aside--closeBtn" onClick={asideOff}><span></span></div>
            </div>
            {/* <div onClick={testPost}>보내기</div> */}
            {asideType == "recruit" ? <AsideForms type={"recruit"}/> : null}
            {asideType == "contact" ? <AsideForms type={"contact"}/> : null}
            {asideType == "hire" ? <AsideHire id={noticeNumber}/> : null}
            {asideType == "news" ? <AsideNews id={noticeNumber}/> : null}
        </div>
    )
}