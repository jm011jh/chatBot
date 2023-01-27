import { useEffect, useState } from "react"
import useStore from "../../store"
import FormRecruit from "./form_recruit"
export default function AsideRecruit(props){

    useEffect(()=>{

    },[])
    return(
        <div className="aside--content">
            <div className="aside--content-head">
                <div className="aside--content-head-bg">
                    <div className="aside--content-head-bgImg"></div>
                </div>
                <div className="aside--content-head-text">
                    <div className="aside--content-head-text01">슬래쉬에 지원하세요.</div>
                    <div className="aside--content-head-text02">JOIN US!</div>
                    <div className="aside--content-head-text03">send us your profile, we will be in touch soon</div>
                </div>
            </div>
            <div className="aside--content-body">
                <div className="aside--content-form">
                    <FormRecruit/>
                </div>
            </div>
        </div>
    )
}