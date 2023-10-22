import {OptionSide, OptionType} from "../../types/options";
import {isCall, isLong} from "../../utils/utils";
import {Box} from "@mui/material";
import {LoadingAnimation} from "../loading";
import {NoContent} from "../TableNoContent";

const getText = (type:OptionType,side:OptionSide)=>{
    return `We currently do not have any ${isLong(side) ? "long" : "short"} ${
        isCall(type) ? "call" : "put"
    } options.`;
}

type ContentProps = {
    options:OptionWithPremia[];
}

const Content = ({options,type,side,loading,error}:ContentProps)=>{
    if(loading){
        return (
            <Box sx={{padding:"20px"}}>
                <LoadingAnimation size={40}/>
            </Box>
        );
    }
    if(error) {
        return <NoContent text={getText(type,side)}/>;
    }
    return (
        <>
            {options.length===0? (
                <NoContent text={getText(type,side)}/>
            ):(
                <O
            )}
        </>
    )
}