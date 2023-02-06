import useStore  from "../../store"
import { useEffect, useState, useRef } from "react"
import axios from "axios"

export default function FormContact(){
    var agree = false;
    const {
        getProjectType
        ,projectType02
        ,projectPeriod
        ,projectBudget
        ,getCount
    } = useStore(state => state)
    const [projectTypes, setProjectTypes] = useState([])
    const [inputs, setInputs] = useState({
        id : '',
        pj_type01 : '',
        pj_type02 : '',
        pj_budget : '',
        pj_period : '',
        pj_desc : '',
        user_name : '',
        user_job : '',
        company_name : '',
        company_email : '',
        company_phone : '',
        company_url : '',
    })
    const textValueHandler = (e) => {
        const {name, value} = e.target
        const nextInputs = {...inputs,[name] : value,}
        setInputs(nextInputs)
    }
    const choiceValueHandler = (e, type) => {
        var val, nextInputs
        if(type === 1){
            val = e.target.getAttribute("data-number")
            nextInputs = {...inputs, pj_type01 : Number(val)}
        } else if(type === 2){
            val = e.target.innerHTML
            nextInputs = {...inputs, pj_type02 : val}
        } else if(type === 3){
            val = e.target.innerHTML
            nextInputs = {...inputs, pj_budget : val}
        } else if(type === 4){
            val = e.target.innerHTML
            nextInputs = {...inputs, pj_period : val}
        }
        setInputs(nextInputs)
    }
    const submitProjectRequest = () => {
        axios.post("/api/post/request/project",inputs).then((res) => console.log(res))
    }
    const agreeCheck = useRef()
    useEffect(()=>{
        agreeCheck.current.addEventListener('click',e => {
            if(agree === false){
                agree = true
                agreeCheck.current.classList.add("checked")
            }else{
                agree = false
                agreeCheck.current.classList.remove("checked")
            }
        })
        getCount('project_request').then(res => {
            const nextInputs = {
                ...inputs,
                id : res.count_num
            }
            setInputs(nextInputs)
        })
        getProjectType.then( res => {
            setProjectTypes(res)
        })
    },[])
    useEffect(()=>{
        const asideChoice = document.querySelectorAll(".aside--form-choice")
        asideChoice.forEach(function(el){
            const asideChoiceItems = el.querySelectorAll(".aside--form-choice-item")
            asideChoiceItems.forEach(function(el_2){
                el_2.addEventListener("click",function(){
                    for(let item of asideChoiceItems){
                        item.classList.remove("selected")
                    }
                    el_2.classList.add("selected")
                })
            })
        })
    },[projectTypes])
    return(
        <div className="aside--form">
            <div className="aside--form-choice">
                <div className="aside--form-choice-tit">프로젝트를 선택하세요</div>
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
            <div className="aside--form-choice">
                <div className="aside--form-choice-tit">유형을 선택하세요</div>
                <div className="aside--form-choice-wrap">
                    {
                        projectType02.map(function (el,idx){
                            return(
                                <div key={idx} className="aside--form-choice-item" onClick={e => choiceValueHandler(e,2)}>{el}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="aside--form-choice">
                <div className="aside--form-choice-tit">예산을 선택하세요</div>
                <div className="aside--form-choice-wrap">
                    {
                        projectBudget.map(function (el,idx){
                            return(
                                <div key={idx} className="aside--form-choice-item" onClick={e => choiceValueHandler(e,3)}>{el}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="aside--form-choice">
                <div className="aside--form-choice-tit">기간을 선택하세요</div>
                <div className="aside--form-choice-wrap">
                    {
                        projectPeriod.map(function (el,idx){
                            return(
                                <div key={idx} className="aside--form-choice-item" onClick={e => choiceValueHandler(e,4)}>{el}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="aside--form-typing">
                <div className="aside--form-typing-item require">
                    <label htmlFor="user_name"><p>이름</p></label>
                    <input type="text" id="user_name" name="user_name" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="user_job"><p>직책</p></label>
                    <input type="text" id="user_job" name="user_job" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item require">
                    <label htmlFor="company_name"><p>기관명 혹은 기업명</p></label>
                    <input type="text" id="company_name" name="company_name" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item require">
                    <label htmlFor="company_email"><p>이메일</p></label>
                    <input type="text" id="company_email" name="company_email" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item require">
                    <label htmlFor="company_phone"><p>연락처</p></label>
                    <input type="text" id="company_phone" name="company_phone" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="company_url"><p>URL 브랜드 혹은 프로젝트 사이트</p></label>
                    <input type="text" id="company_url" name="company_url" onChange={textValueHandler}></input>
                </div>
                <div className="aside--form-typing-item">
                    <label htmlFor="pj_desc"><p>프로젝트 설명</p></label>
                    <textarea id="pj_desc" name="pj_desc" onChange={textValueHandler}></textarea>
                </div>
            </div>
            <div className="aside--form-agreement-wrap">
                <div className="aside--form-agreement" ref={agreeCheck}>
                    <div className="aside--form-check"><span></span></div>
                    <div className="aside--form-agreement-text">동의합니다.</div>
                </div>
            </div>
            <div className="aside--form-submit" onClick={submitProjectRequest}>
            {/* <div className="aside--form-submit"> */}
                <p>의뢰하기</p>
            </div>
        </div>
    )
}