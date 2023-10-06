import {useEffect} from "react";
import {Layout} from "../components/layout";
import {Typography} from "@mui/material";
import {ComplexGraph} from "../components/CryptoGraph/TradingView";

export const TradePage=()=>{
    useEffect(()=>{
        document.title="Buy | Carmine Finance";
    });

    return (
        <Layout>
            <Typography sx={{mb:2}} variant={"h4"}>
                Buy Options
            </Typography>
            <ComplexGraph/>
        </Layout>
    )
}