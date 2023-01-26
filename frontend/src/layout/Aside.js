import { useEffect, useState } from "react"
import useStore from "../store"
import axios from "axios"
import AsideNews from "./components/Aside_news"
import AsideContact from "./components/Aside_contact"
export default function Aside(){
    const {
        asideType,
        asideProp,
        asideOff,
        getNews,
        getNoticeHireCount,
        noticeNumber,
        getNoticeNewsCount
    } = useStore(state => state)
    let [noticeHireCount, setNoticeHireCount] = useState()
    let [noticeNewsCount, setNoticeNewsCount] = useState()
    useEffect(()=>{
        getNews.then(res => {
            console.log(res)
        })
        getNoticeHireCount.then(res => {
            setNoticeHireCount(res.count_num)
        })
        getNoticeNewsCount.then(res => {
            setNoticeNewsCount(res.count_num)
        })
    },[])

    // let testPost = (e) => {
    //     let body = {
    //         is_hire: true,
    //         id :Number(noticeHireCount),
    //         position: Number(1),
    //         location: Number(2),
    //         desc : String("슬래쉬와 함께할 멋쟁이 구해요."),
    //         cathegory : String("황제정규직"),
    //         ability : ["잘난사람","근데 못나도 좋음."],
    //         link01 :String("https://www.slash.builders"),
    //     }
    //     axios.post("/api/post/notice/hire",body).then((res) => console.log(res))
    // }
    let testPost = (e) => {
        const date = new Date();
        let body = {
            id :Number(noticeNewsCount),
            is_show: true,
            name : String("caster"),
            location: Number(1),
            desc : String("날짜를 테스트합니다."),
            link01 :String("https://www.slash.builders"),
            img: String("https://slash.builders/common/image/main/sec04_pro04.png"),
            date: String(date.toLocaleString('en-us'))
        }
        axios.post("/api/post/notice/news",body).then((res) => console.log(res))
    }
    return(
        <div className={`aside aside--${asideProp ? "open" : "close"}`}>
            <div className="aside--closeBtn" onClick={asideOff}>닫기</div>
            {/* <div onClick={testPost}>보내기</div> */}
            {asideType == "hire" ? <div>채용공고{noticeNumber}번</div> : null}
            {asideType == "contact" ? <AsideContact/> : null}
            {asideType == "recruit" ? <div>채용채용</div> : null}
            {asideType == "news" ? <AsideNews id={noticeNumber}/> : null}
        </div>
    )
}