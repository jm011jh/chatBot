import useStore from "../../store"
export default function Hire01(props){
    const {asideOn,setAsideType,asideType} = useStore(state => state)
    function asideOpen(){
        asideOn()
        setAsideType(props.item.asideType)
    }
    return(

        <div className="bd--jobItem" onClick={e => asideOpen()}>
            <div className="bd--jobItem-text01">{props.item.text01}</div>
            <div className="bd--jobItem-text02">{props.item.text02}</div>
            <div className="bd--jobItem-text03">{props.item.text03}</div>
        </div>
    )
}