import Header from "./components/Header"
// import Body from "./components/Body"
import { Outlet } from "react-router-dom";
import UserContext from './utils/UserContext';
import { useEffect, useState } from "react";
import { Provider } from "react-redux"
import appStore from "./utils/appStore";

const App = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = { name: 'rakesh' };
        setUserName(data.name)
    }, [])
    return (
        <div className="App">
            <Provider store={appStore}>
                <UserContext.Provider value={{ loginUser: userName }}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        </div>
    )
}
export default App;