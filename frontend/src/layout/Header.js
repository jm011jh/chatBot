import { useState } from "react";
export default function Header(){
    function plusZero(n){
        if(n<10){
            return String("0") + String(n)
        }else {
            return n
        }
    }
    var time = new Date();
    var hour = plusZero(time.getHours());
    var minutes = plusZero(time.getMinutes());
    var seconds = plusZero(time.getSeconds());
    var t = hour +":" + minutes;
    let [whatTime, setWhatTime] = useState(t)

    const getTime = () => {
        time = new Date();
        hour = plusZero(time.getHours());
        minutes = plusZero(time.getMinutes());
        seconds = plusZero(time.getSeconds());
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