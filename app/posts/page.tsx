import Link from "next/link"
import getUser from "../libs/getUser"

export default async function Page(){

    const users = await getUser()
        return(
            <div>
                {users.map(user => {
                    return(<p key={user.id}>
                        <Link href={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                    </p>
                    )
                   
                })}
            </div>
        )
}