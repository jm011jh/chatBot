import { useEffect, useState } from "react"
import useStore from "../../store";
import axios from "axios";
export default function News01(props){
    const {asideOn,setAsideType,setNoticeNumber,getHireLocation,getNoticeNews, getCount} = useStore(state => state)
    let [noticeNews, setNoticeNews] = useState([])
    function asideOpen(){
        asideOn()
        setAsideType("news")
        setNoticeNumber(props.item.id)
    }
    let [thisLocation, setThisLocation] = useState()
    useEffect(()=>{
        getNoticeNews.then( res => {
            setNoticeNews(res)
        })
        getHireLocation.then( res => {
            let a = res.filter(x => x.id == props.item.location)
            setThisLocation(a[0].name)
        })
    },[])

    let  [isLike, setIsLike] = useState(true)
    function test(){
        axios.post(`/api/post/notice/news/like/${isLike ? 'plus' : 'minus'}`,{
            id : props.item.id
        })
        setIsLike(!isLike);
    }
    return(
        <div className="bd--news01" 
        // onClick={asideOpen}
        >
            <div className="bd--news01-head">
                <div className="bd--news01-info">
                    <div className="bd--news01-user">{props.item.name}</div>
                    {/* <div className="bd--news01-location">{thisLocation}</div> */}
                </div>
            </div>
            <div className="bd--news01-body">
            <div className="bd--news01-img" style={{backgroundImage: `url(${props.item.img})`}}></div>
                <div className="bd--news01-desc">{props.item.desc}</div>
                <div className="bd--news01-date"><p>{props.item.date}</p></div>
                <div className="bd--news01-like"></div>
            </div>
            <div onClick={e => test()}>{isLike ? "like "+ (props.item.like) : "liked "+ (props.item.like + 1)}</div>
            {/* {
                isLike
                ? <div onClick={e => {test()}}>like&nbsp;{props.item.like}</div>
                : <div onClick={e => {test()}}>liked!&nbsp;{props.item.like + 1}</div>
            } */}
        </div>
    )
}