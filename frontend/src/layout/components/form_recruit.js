import useStore  from "../../store"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

export default function FormRecruit(){
    const {
        getRecruitType
        ,getRecruitRequestCount
    } = useStore(state => state)
    const [projectTypes, setProjectTypes] = useState([])
    const [inputs, setInputs] = useState({
        id : '',
        rc_type : '',
        user_email : '',
        user_name : '',
        user_phone : '',
        user_pr : '',
        user_url : '',
    })
    const textValueHandler = (e) => {
        const {name, value} = e.target
        const nextInputs = {...inputs,[name] : value,}
        setInputs(nextInputs)
    }
    const choiceValueHandler = (e, type) => {
        var val, nextInputs
        val = e.target.getAttribute("data-number")
        nextInputs = {...inputs, rc_type : Number(val)}
        setInputs(nextInputs)
    }
    const submitProjectRequest = () => {
        axios.post("/api/post/request/recruit",inputs).then((res) => console.log(res))
    }
    useEffect(()=>{
        getRecruitRequestCount.then(res => {
            const nextInputs = {
                ...inputs,
                id : res.count_num
            }
            setInputs(nextInputs)
        })
        getRecruitType.then( res => {
            setProjectTypes(res)
        })
    },[])
    return(
        <div className="aside--form">
            <div className="aside--form-choice">
                <div className="aside--form-choice-tit">지원분야를 선택하세요</div>
                <div className="aside--form-choice-wrap">
                    {
                        projectTypes.map(function (el,idx){
                            return(
                                <div key={idx} data-number={el.id} className="aside--form-choice-item" onClick={e => choiceValueHandler(e,1)}>{el.name}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="aside--form-typing">
                <div className="aside--form-typing-item">
                    <label htmlFor="user_name">이름</label>
                    <input type="text" id="user_name" name="user_name" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="user_email">이메일</label>
                    <input type="text" id="user_email" name="user_email" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="user_phone">연락처</label>
                    <input type="text" id="user_phone" name="user_phone" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="user_url">URL (포트폴리오, 웹사이트)</label>
                    <input type="text" id="user_url" name="user_url" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="user_pr">자기소개</label>
                    <textarea id="user_pr" name="user_pr" onChange={textValueHandler}></textarea>
                </div>
            </div>
            <div className="aside--form-agreement">
                <input type="checkbox"></input>
                <div className="aside--form-check"><span></span></div>
                <div className="aside--form-agreement-text">동의합니다.</div>
            </div>
            <div className="aside--form-submit" onClick={submitProjectRequest}>
            {/* <div className="aside--form-submit"> */}
                <p>지원하기</p>
            </div>
        </div>
    )
}