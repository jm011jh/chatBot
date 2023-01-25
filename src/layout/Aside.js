import { useState } from "react"
import useStore from "../store"

export default function Aside(){
    const {asideProp,asideOff} = useStore(state => state)
    console.log(asideProp)
    return(
        <div className={`aside aside--${asideProp ? "open" : "close"}`}>
            <div className="aside--closeBtn" onClick={asideOff}>닫기</div>
            
        </div>
    )
}