import {ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";

import {useMemo} from "react/ts5.0";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {RootState} from "./redux/store";
import {connectToLatest} from "./network/account";
type Props = {children:ReactNode};
export const Controller = ({children}:Props)=>{
    const {settings} = useSelector((s:RootState)=>s);
    useEffect(()=>{
        connectToLatest();
    },[])
    const queryClient = new QueryClient();
    return(
      <QueryClientProvider client={queryClient}>

      </QueryClientProvider>
    );

}
