import { useEffect, useState } from "react"
import useStore from "../../store"

export default function AsideRecruit(props){

    useEffect(()=>{

    },[])
    return(
        <div className="aside--hire">
            <div className="aside--hire-head">
                <div className="aside--hire-head-bg">
                    <div className="aside--hire-head-bgImg"></div>
                </div>
                <div className="aside--hire-head-text">
                    <div className="aside--hire-head-text01">슬래쉬에 지원하세요.</div>
                    <div className="aside--hire-head-text02">JOIN US!</div>
                    <div className="aside--hire-head-text03">send us your profile, we will be in touch soon</div>
                </div>
            </div>
            <div className="aside--hire-body">
                <div className="aside--hire-form">
                    
                </div>
            </div>
        </div>
    )
}