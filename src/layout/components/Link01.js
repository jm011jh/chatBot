import { useState } from "react"
import useStore from "../../store"

export default function Link01(){
    const {asideProp,asideOn,asideOff} = useStore(state => state)
    let [asideSW, setAsideSW] = useState(false)
    function test(){
        asideOn()
        console.log(asideProp)
    }
    function con(){
        console.log(asideProp)
    }
    return(
        <div className="bd--link01" onClick={e => test()}>
            <div className="bd--link01-bg"><div className="bd--link01-bgImg" style={{backgroundImage: `url("https://via.placeholder.com/500")` }}></div></div>
            <div className="bd--link01-text">
                <div className="bd--link01-text01">123</div>
                <div className="bd--link01-text02">ASD</div>
                <div className="bd--link01-text03">ㄱㄷㅇ</div>
            </div>
        </div>
    )
}