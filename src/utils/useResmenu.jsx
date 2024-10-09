import {useState,useEffect} from "react"
import { MENU_URL } from "./const";

const useResmenu=(resId)=>{

    const [menu, setMenu] = useState(null);
    useEffect(() => {
        fetchmenu();
      }, []);
      
    const fetchmenu = async () => {
        const data = await fetch(MENU_URL +
            resId 
        );
        const json = await data.json();
        // console.log(json)
        // console.log(json.data)
        setMenu(json.data);
    };
    return menu;
}
export default useResmenu;