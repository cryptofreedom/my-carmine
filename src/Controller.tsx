import {ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";

import {useMemo} from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {RootState} from "./redux/store";
import {connectToLatest} from "./network/account";
import {getTheme} from "./style/theme";
import {ThemeProvider} from "@mui/material";
type Props = {children:ReactNode};
export const Controller = ({children}:Props)=>{
    const {settings} = useSelector((s:RootState)=>s);
    useEffect(()=>{
        connectToLatest();
    },[])
    const theme = useMemo(()=>getTheme(settings.theme),[settings.theme]);
    const queryClient = new QueryClient();
    return(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    );

}
