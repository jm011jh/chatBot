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
            text01:"Need a help?",
            text02:"슬래쉬에 문의하세요.",
            text03:"프로젝트에 대한 간단한 정보를 보내주시면 담당자가 빠른 시일 내로 연락드립니다.",
            asideType: "contact",
        },
        {
            text01:"Join to slash!",
            text02:"슬래쉬와 함께하세요.",
            text03:"슬래쉬는 상시채용중입니다. 현재 진행중인 채용건이 없더라도 미리 등록을 해주시면 우선적으로 검토를 진행하고 있습니다.",
            asideType: "recruit",
        },
    ],
    getCount : (type) => axios.get(`/api/get/count/${type}`).then(res => { // recruit_request, project_request, notice_news, notice_hire
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