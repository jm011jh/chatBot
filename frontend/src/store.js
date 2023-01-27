import axios from 'axios'
import {create} from 'zustand'
const useStore = create((set) => ({
    asideProp : false,
    asideOn : ()=> set(({asideProp: true})),
    asideOff : ()=> set(({asideProp: false})),
    asideType : "",
    setAsideType : (type) => set((state)=> ({asideType : type})),
    noticeNumber : 0,
    setNoticeNumber : (num) => set((state) => ({noticeNumber : num})),
    projectType02 : ["신규구축","리뉴얼","유지보수","기타"],
    projectPeriod : ["ASAP","1~2개월","3~6개월","6개월~1년","1년 이상"],
    projectBudget : ["~1천만원","1천만원~5천만원","5천만원~1억원","1억원~"],
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
    
    getRecruitRequestCount : axios.get("/api/get/count/request/recruit").then(res => {
        return res.data
    }),
    getProjectRequestCount : axios.get("/api/get/count/request/project").then(res => {
        return res.data
    }),
    getNoticeNewsCount : axios.get("/api/get/count/notice/news").then(res => {
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
    getNoticeNews : axios.get("/api/get/notice/news").then( res => {
        return res.data
    }),
    getProjectType : axios.get("/api/get/info/contact/type").then(res => {
        return res.data
    }),
    getRecruitType : axios.get("/api/get/info/recruit/type").then(res => {
        return res.data
    }),
}))

export default useStore