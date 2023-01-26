import { useEffect, useState } from "react"
import useStore from "../../store";
export default function News01(props){
    const {asideOn,setAsideType,setNoticeNumber,getHirePosition,getHireLocation} = useStore(state => state)
    function asideOpen(){
        asideOn()
        setAsideType("news")
        setNoticeNumber(props.item.id)
    }
    let [thisLocation, setThisLocation] = useState()
    useEffect(()=>{
        getHireLocation.then( res => {
            let a = res.filter(x => x.id == props.item.location)
            setThisLocation(a[0].name)
        })
    },[])
    return(
        <div className="bd--news01" onClick={asideOpen}>
            <div className="bd--news01-head">
                <div className="bd--news01-info">
                    <div className="bd--news01-infoText01">{props.item.name}</div>
                    <div className="bd--news01-infoText02">
                        <p>{props.item.time}</p>
                        <p>{props.item.position}</p>
                    </div>
                </div>
            </div>
            <div className="bd--news01-body">
                <div className="bd--news01-desc">{props.item.desc}</div>
                <div className="bd--news01-img">{props.item.img}</div>
                <div className="bd--news01-img">{props.item.date}</div>
            </div>

        </div>
    )
}