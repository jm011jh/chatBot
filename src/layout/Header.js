import { useState } from "react";
export default function Header(){
    let [whatTime, setWhatTime] = useState()
    const getTime = () => {
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        let t = hour +":" + minutes + ":"+seconds;
        setWhatTime(t)
    }
    setInterval(getTime, 1000)
    return(
        <div className="hd">
            <div className="hd--time">{whatTime}</div>
        </div>
    )
}