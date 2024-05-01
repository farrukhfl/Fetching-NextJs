import { error } from "console"

export default async function getUser(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error("Can't fetch file")

    }   
    return await response.json() 
}