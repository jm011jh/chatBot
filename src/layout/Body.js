import Link01 from "./components/Link01"
import Hire01 from "./components/Hire01"
import useStore from "../store"
export default function Body(){
    const {link01Data,hire01Data} = useStore(state => state)
    console.log(hire01Data)
    return(
        <div className="bd">
            <div className="bd--links">{
                link01Data.map(function(item,idx){
                    return(<Link01 key={idx} item={item}></Link01>)
                })
            }</div>
            <div className="bd--jobs">{
                hire01Data.map(function(item,idx){
                    return(<Hire01 key={idx} item={item}></Hire01>)
                })
            }</div>
        </div>
    )
}