import { useEffect, useState } from "react"
import useStore from "../../store"

export default function AsideHire(props){
    const {getNoticeHire,getHirePosition,getHireLocation} = useStore(state => state)
    let [thisHire, setThisHire] = useState('')
    let [thisPosition, setThisPosition] = useState()
    let [thisLocation, setThisLocation] = useState()
    useEffect(()=>{
        getNoticeHire.then( res => {
            let a = res.filter(x => x.id == props.id)
            setThisHire(a[0])
        })
        getHirePosition.then( res => {
            let a = res.filter(x => x.id == props.id)
            setThisPosition(a[0].name)
        })
        getHireLocation.then( res => {
            let a = res.filter(x => x.id == props.id)
            setThisLocation(a[0].name)
        })
    },[props.id])
    return(
        <div className="aside--news">
            <div className="aside--news-date">종류 : {thisHire.cathegory}</div>
            <div className="aside--news-desc">설명 : {thisHire.desc}</div>
            <div className="aside--news-name">링크 : {thisHire.link01}</div>
            <div className="aside--news-name">직군 : {thisPosition}</div>
            <div className="aside--news-name">위치 : {thisLocation}</div>
            <div className="aside--news-bg">
                {/* <div className="aside--news-bgImg" style={{backgroundImage: `url(${thisHire.img})`}}></div> */}
            </div>
        </div>
    )
}