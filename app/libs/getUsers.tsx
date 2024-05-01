export async function getUsers(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!response.ok){
        throw new Error("Can't fetch")
    }
    return response.json()
}