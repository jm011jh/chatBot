import { useState } from "react";
export default function Header(){
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var t = hour +":" + minutes;
    let [whatTime, setWhatTime] = useState(t)
    const getTime = () => {
        time = new Date();
        hour = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        t = hour +":" + minutes;
        setWhatTime(t)
    }
    setInterval(getTime, 1000)
    return(
        <div className="hd">
            <div className="hd--time">{whatTime}</div>
        </div>
    )
}