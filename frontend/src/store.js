import axios from 'axios'
import {create} from 'zustand'
const useStore = create((set) => ({
    asideProp : false,
    asideOn : ()=> set(({asideProp: true})),
    asideOff : ()=> set(({asideProp: false})),
    asideType : "",
    setAsideType : (type) => set((state)=> ({asideType : type})),
    noticeNumber : Number(0),
    setNoticeNumber : (num) => set((state) => ({noticeNumber : num})),
    link01Data : [
        {
            text01:"우리에게 연락해",
            text02:"지금당장",
            text03:"저나저나",
            asideType: "contact",
        },
        {
            text01:"우리에게 지원해",
            text02:"지금당장",
            text03:"커몬커몬",
            asideType: "recruit",
        },
    ],
    news01Data: [
        {
            icon:"",
            name:"jerry",
            time:"16:45",
            position:"Seoul.HongDae",
            desc:"운동...좋아하세요...?",
            img:""
        },
        {
            icon:"",
            name:"rossy",
            time:"18:45",
            position:"Seoul.HongDae",
            desc:"야근은 정말 싫습니다.",
            img:""
        },
        {
            icon:"",
            name:"G.S.S",
            time:"12:45",
            position:"Seoul.HongDae",
            desc:"제가 또 풍이나 암 그 쪽 전문가로써 말씀드리자면...",
            img:""
        },
        {
            icon:"",
            name:"jerry",
            time:"16:45",
            position:"Seoul.HongDae",
            desc:"좋은 소식을 알려드리겠습니다.",
            img:""
        },
    ],
    getNews : axios.get("/api/test").then(res => {
        return res.data
    }),
    getNoticeHireCount : axios.get("/api/get/count/notice/hire").then(res => {
        return res.data
    }),
    getHirePosition : axios.get("/api/get/info/hire/position").then(res => {
        return res.data
    }),
    getHireLocation : axios.get("/api/get/info/hire/location").then(res => {
        return res.data
    }),
    getNoticeHire : axios.get("/api/get/notice/hire").then( res => {
        return res.data
    }),
    getNoticeNewsCount : axios.get("/api/get/count/notice/news").then(res => {
        return res.data
    }),
    getNoticeNews : axios.get("/api/get/notice/news").then( res => {
        return res.data
    }),
}))

export default useStore