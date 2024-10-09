import { useState,useEffect } from "react"

const useOnline=()=>{
    const [ostatus,setOstatus]=useState(true);
    useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOstatus(false);

    })
    window.addEventListener("online",()=>{
        setOstatus(true);

    })},[]);
    return ostatus;
}
export default useOnline;