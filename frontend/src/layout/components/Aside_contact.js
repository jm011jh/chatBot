import { useEffect, useState } from "react"
import useStore from "../../store"

export default function AsideContact(props){

    useEffect(()=>{

    },[])
    return(
        <div className="aside--contact">
            <div className="aside--contact-head">
                <div className="aside--contact-head-bg">
                    <div className="aside--contact-head-bgImg"></div>
                </div>
                <div className="aside--contact-head-text">
                    <div className="aside--contact-head-text01">프로젝트를 문의하세요</div>
                    <div className="aside--contact-head-text02">TEXT US!</div>
                    <div className="aside--contact-head-text03">send us your project request, we will be in touch soon</div>
                </div>
            </div>
            <div className="aside--contact-body">
                <div className="aside--contact-form">
                    
                </div>
            </div>
        </div>
    )
}