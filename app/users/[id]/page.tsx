import { getUsers } from "../../libs/getUsers";

export default async function UserId({params: {id}}){
    const userData = await getUsers(id)
    return(
        <div>
            <h1>{userData.name}</h1>
            {/* <h1>{userData.username}</h1> */}
        </div>
    )
}