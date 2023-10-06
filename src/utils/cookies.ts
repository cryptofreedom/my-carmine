export const isCookieSet = (cookieName:string):boolean=>{
    return document.cookie.split(";").some((c)=>{return c.includes(`${cookieName}=`)});
}

export const setCookieWithExpiry=(
    cName:string,
    cValue:string,
    expiry:number
)=>{
    const expires=new Date();
    expires.setTime(expires.getTime()+expiry);
    document.cookie=`${cName}=${cValue};expires=`+expires.toUTCString()+";path=/";
}