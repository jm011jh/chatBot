import useStore from "../../store"
export default function Link01(props){
    const {asideOn,asideType,setAsideType} = useStore(state => state)
    function asideOpen(){
        asideOn()
        setAsideType(props.item.asideType)
    }
    return(
        <div className="bd--link01" onClick={e => asideOpen()}>
            <div className="bd--link01-bg"><div className="bd--link01-bgImg" style={{backgroundImage: `url("https://via.placeholder.com/500")` }}></div></div>
            <div className="bd--link01-text">
                <div className="bd--link01-text01">{props.item.text01}</div>
                <div className="bd--link01-text02">{props.item.text02}</div>
                <div className="bd--link01-text03">{props.item.text03}</div>
            </div>
        </div>
    )
}