import { useState } from "react"
import useStore from "../store"

export default function Aside(){
    const {asideProp,asideOff} = useStore(state => state)
    console.log(asideProp)
    return(
        <div className={`aside aside--${asideProp ? "open" : "close"}`}>
            <div onClick={asideOff}>aside Close</div>
            
        </div>
    )
}