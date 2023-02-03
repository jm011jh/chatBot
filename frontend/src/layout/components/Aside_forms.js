import { useEffect, useState } from "react"
import useStore from "../../store"
import FormContact from "./form_contact"
import FormRecruit from "./form_recruit"
import ArrCircle from "../design/ArrCircle"

export default function AsideForms(props){
    const formType = props.type
    return(
        <div className="aside--content">
            <div className="aside--content-head">
                <div className="aside--content-head-bg">
                    <div className="aside--content-head-bgImg"></div>
                    <ArrCircle/>
                </div>
                {formType === "contact" ? 
                <div className="aside--content-head-text">
                    <div className="aside--content-head-text01">프로젝트를 문의하세요</div>
                    <div className="aside--content-head-text02">TEXT US!</div>
                    <div className="aside--content-head-text03">send us your project request, we will be in touch soon</div>
                </div>
                : null}
                {formType === "recruit" ? 
                <div className="aside--content-head-text">
                    <div className="aside--content-head-text01">슬래쉬에 지원하세요.</div>
                    <div className="aside--content-head-text02">JOIN US!</div>
                    <div className="aside--content-head-text03">send us your profile, we will be in touch soon</div>
                </div>
                : null}
            </div>
            <div className="aside--content-body">
                <div className="aside--content-form">
                    {formType === "contact" ? <FormContact/> : null}
                    {formType === "recruit" ? <FormRecruit/> : null}
                </div>
            </div>
        </div>
    )
}