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
            <div className="aside--news-position">{thisPosition}</div>
            <div className="aside--news-info"><p>유형</p><p>{thisHire.cathegory}</p></div>
            <div className="aside--news-info"><p>지역</p><p>{thisLocation}</p></div>
            <div className="aside--news-desc">{thisHire.desc}</div>
            <a className="aside--news-link" href={thisHire.link_01} target="blank">지원하기<span></span></a>
            <div className="aside--news-bg">
                {/* <div className="aside--news-bgImg" style={{backgroundImage: `url(${thisHire.img})`}}></div> */}
            </div>
        </div>
    )
}