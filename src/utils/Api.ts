import axios from "axios";

type CallServiceProps = {
   method: METHOD,
   url: string,
   body: any
}

export enum METHOD {
    POST = "post",
    GET = "get",
    PUT = "put",
    DELETE = "delete"
}

const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: { 'Content-Type': 'application/json'}
});

export async function callService({ method, url, body }: CallServiceProps ){
    const { data } = await api({
        url: url,
        method: method,
        data: body
    });
    return data;
}