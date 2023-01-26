import { useEffect, useState } from "react"
import useStore from "../../store"

export default function AsideNews(props){
    const {getNoticeNews} = useStore(state => state)
    let [thisNews, setThisNews] = useState('')
    useEffect(()=>{
        getNoticeNews.then( res => {
            let a = res.filter(x => x.id == props.id)
            setThisNews(a[0])
        })
    },[props.id])
    return(
        <div className="aside--news">
            <div className="aside--news-date">{thisNews.date}</div>
            <div className="aside--news-name">{thisNews.name}</div>
            <div className="aside--news-desc">{thisNews.desc}</div>
            <div className="aside--news-bg">
                <div className="aside--news-bgImg" style={{backgroundImage: `url(${thisNews.img})`}}></div>
            </div>
        </div>
    )
}