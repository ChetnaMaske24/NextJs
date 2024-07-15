import Link from "next/link";

async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json();
    return data;
}
export default async function Page() {
    const users = await getUsers();
  return (
    <div>
         <h1>Call Api</h1>
         {
            users.map((items)=>(
                <div>
                    <Link href={`users/${items.id}`}>{users.name}</Link>
                </div>
            ))
         }
    </div>
  )
}

