import { useEffect, useState } from "react"
import useStore from "../../store"
export default function Hire01(props){
    const {asideOn,setAsideType,setNoticeNumber,getHirePosition,getHireLocation} = useStore(state => state)
    function asideOpen(){
        asideOn()
        setAsideType("hire")
        setNoticeNumber(props.item.id)
    }
    let [thisPosition, setThisPosition] = useState()
    let [thisLocation, setThisLocation] = useState()
    useEffect(()=>{
        getHirePosition.then( res => {
            let a = res.filter(x => x.id == props.item.position)
            setThisPosition(a[0].name)
        })
        getHireLocation.then( res => {
            let a = res.filter(x => x.id == props.item.location)
            setThisLocation(a[0].name)
        })
    },[])
    return(
        <div className="bd--hire01" onClick={asideOpen}>
            <div className="bd--hire01-bg">
                <div className="bd--hire01-bgImg"></div>
            </div>
            <div className="bd--hire01-text">
                <div className="bd--hire01-text01">{thisPosition}</div>
                <div className="bd--hire01-text02">{thisLocation}</div>
                <div className="bd--hire01-text03">{props.item.cathegory}</div>
                <div className="bd--hire01-text04">{props.item.desc}</div>
                {/* <div className="bd--hire01-text05">{props.item.link_01}</div> */}
                <div className="bd--hire01-text05">{
                    props.item.is_hire ? <p className="bd--hire01-text05-on">채용중</p> : <p className="bd--hire01-text05-off">채용마감</p>
                }</div>
            </div>
        </div>
    )
}