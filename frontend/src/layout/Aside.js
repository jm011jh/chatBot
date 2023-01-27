import { useEffect, useState } from "react"
import useStore from "../store"
import axios from "axios"
import AsideNews from "./components/Aside_news"
import AsideContact from "./components/Aside_contact"
import AsideRecruit from "./components/Aside_recruit"
import AsideHire from "./components/Aside_hire"
export default function Aside(){
    const {
        asideType,
        asideProp,
        asideOff,
        noticeNumber,
    } = useStore(state => state)
    return(
        <div className={`aside aside--${asideProp ? "open" : "close"}`}>
            <div className="aside--closeBtn" onClick={asideOff}>닫기</div>
            {/* <div onClick={testPost}>보내기</div> */}
            {asideType == "contact" ? <AsideContact/> : null}
            {asideType == "recruit" ? <AsideRecruit/> : null}
            {asideType == "hire" ? <AsideHire id={noticeNumber}/> : null}
            {asideType == "news" ? <AsideNews id={noticeNumber}/> : null}
        </div>
    )
}