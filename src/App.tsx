import { useState } from 'react'
import './App.css'
import {isCookieSet} from "./utils/cookies";
import {Provider} from "react-redux";
import {Controller} from "./Controller";
import {store} from "./redux/store";
import {CssBaseline} from "@mui/material";
import {TradePage} from "./pages/trade";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {TermsAndConditions} from "./pages/TermsAndConditions";
function App() {
    const [check,rerender] = useState(false);
    const acceptedTermsAndConditions = isCookieSet("carmine_t&c");
    return (
        <Provider store={store}>
            <Controller>
                <CssBaseline/>
                {acceptedTermsAndConditions?(
                    <>
                    <Router>
                        <Routes>
                            <Route path={"/"} element={<TradePage/>}/>
                            <Route path={"/trade"} element={<TradePage/>}/>
                        </Routes>
                    </Router>
                </>
                ):(
                    <TermsAndConditions check={check} rerender={rerender}/>
                )
                }
            </Controller>
        </Provider>
    )

}

export default App
