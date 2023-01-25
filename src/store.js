import {create} from 'zustand'
// import axios from 'axios'
const useStore = create((set) => ({
    asideProp : false,
    asideOn : ()=> set(({asideProp: true})),
    asideOff : ()=> set(({asideProp: false})),
    asideType : "",
    setAsideType : (type)=> set((state)=> ({asideType : type})),
    link01Data : [
        {
            text01:"링크01 텍스트01",
            text02:"링크01 텍스트02",
            text03:"링크01 텍스트03",
            asideType: "contact",
        },
        {
            text01:"링크02 텍스트01",
            text02:"링크02 텍스트02",
            text03:"링크02 텍스트03",
            asideType: "recruit",
        },
    ],
    hire01Data: [
        {
            prop:true,
            text01:"시니어 개발자",
            text02:"개발자 채용텍스트 02",
            text03:"개발에 대한 심도 깊은 이해도와 다양한 경험을 바탕으로 개발팀을 이끌어갈 시니어급 리더 개발자를 구인 중에 있습니다. 현재 진행 중인 프로젝트는 3D및 VR이 주류이며 드물게 서버 개발도 진행하고 있습니다.",
            asideType:"devSenior",
        },
        {
            prop:true,
            text01:"시니어 디자이너",
            text02:"디자이너 채용텍스트 02222",
            text03:"디자인에 대한 심도 깊은 이해도와 다양한 경험을 바탕으로 개발팀을 이끌어갈 시니어급 리더 디자이너를 구인 중에 있습니다. 현재 진행 중인 프로젝트는 어플리케이션이 주류이며 드물게 웹페이지 제작도 진행하고 있습니다.",
            asideType:"designSenior",
        },
    ]
}))

export default useStore