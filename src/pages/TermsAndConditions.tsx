import {setCookieWithExpiry} from "../utils/cookies";
import {useEffect} from "react";
import {Box, Button, Link, Typography, useTheme} from "@mui/material";

const HIDE_TIME_MS=12*60*60*1000;

const storeTermsAndConditions=(check:boolean,rerender:(b:boolean)=>void)=>{
    setCookieWithExpiry("carmine-t&c","accepted",HIDE_TIME_MS);
    rerender(!check);
}
type Props = {
    rerender:(b:boolean)=>void,
    check:boolean
}
export const TermsAndConditions=({check,rerender}:Props)=>{
    useEffect(()=>{
        document.title="Terms & Conditions | Carmine Finance";
    });
    const theme=useTheme();
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 4,
        textAlign: "center",
        [theme.breakpoints.up("sm")]: {
            padding: "0 20vw",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0 20px",
        },
    };

    // TODO: master URL when merged
    const termsUrl =
        "https://github.com/CarmineOptions/fe-app/blob/development/TermsOfUse.md";
    return (
        <Box sx={style}>
            <Typography variant={"h4"}>Terms &* Conditions</Typography>
            <Typography variant="body1">
                Please take a moment to review our terms and conditions, which govern
                the use of our service. You can access the{" "}
                <Link color="inherit" href={termsUrl}>
                    document here
                </Link>
                . It's important to read and understand these terms before using our
                service.
            </Typography>
            <Button variant={"contained"} onClick={()=>storeTermsAndConditions(check,rerender)}>
                Accept Terms and Conditions
            </Button>
        </Box>
    )
}