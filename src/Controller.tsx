import {ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {useMemo} from "react/ts5.0";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
type Props = {children:ReactNode};
export const Controller = ({children}:Props)=>{
    const {settings} = useSelector((s:RootState)=>s);
    const queryClient = new QueryClient();
    return(
      <QueryClientProvider client={queryClient}>

      </QueryClientProvider>
    );

}
