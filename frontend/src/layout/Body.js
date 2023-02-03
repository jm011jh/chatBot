import Link01 from "./components/Link01"
import Hire01 from "./components/Hire01"
import News01 from "./components/News01"
import useStore from "../store"
import { useEffect, useState } from "react"
export default function Body(){
    const {link01Data,hire01Data,getNoticeHire,getNoticeNews} = useStore(state => state)
    let [noticeHire, setNoticeHire] = useState([])
    let [noticeNews, setNoticeNews] = useState([])
    useEffect(() => {
        getNoticeHire.then( res => {
            setNoticeHire(res)
        })
        getNoticeNews.then( res => {
            setNoticeNews(res)
        })
    },[])
    return(
        <div className="bd">
            <div className="bd--links bd--cont">
                <div className="bd--sub-tit">Notice</div>
                {link01Data.map(function(item,idx){
                    return(<Link01 key={idx} item={item}></Link01>)
                })}
            </div>
            <div className="bd--jobs bd--cont">
                <div className="bd--sub-tit">각종 채용공고들</div>
                {noticeHire.map(function(item,idx){
                    return(<Hire01 key={idx} item={item}></Hire01>)
                })}
            </div>
            <div className="bd--news bd--cont">
                <div className="bd--sub-tit">각종 새소식들</div>
                {noticeNews.map(function(item,idx){
                    return(<News01 key={idx} item={item}></News01>)
                })}
            </div>
        </div>
    )
}