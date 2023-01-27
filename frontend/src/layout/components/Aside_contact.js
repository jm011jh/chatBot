import { useEffect, useState } from "react"
import useStore from "../../store"
import FormContact from "./form_contact"

export default function AsideContact(props){
    return(
        <div className="aside--content">
            <div className="aside--content-head">
                <div className="aside--content-head-bg">
                    <div className="aside--content-head-bgImg"></div>
                </div>
                <div className="aside--content-head-text">
                    <div className="aside--contact-head-text01">프로젝트를 문의하세요</div>
                    <div className="aside--content-head-text02">TEXT US!</div>
                    <div className="aside--content-head-text03">send us your project request, we will be in touch soon</div>
                </div>
            </div>
            <div className="aside--content-body">
                <div className="aside--content-form">
                    <FormContact/>
                </div>
            </div>
        </div>
    )
}