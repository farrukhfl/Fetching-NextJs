async function getTodos(){
    const notes = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!notes.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

      return notes.json()
}

interface Note{
    userId: string
    id: number
    title: string
    completed: string

}

export default async function Page(){

    const notes: Array<Note> = await getTodos()
    return(
        <div>
            <ul>
                {
                notes.map((note, index)=> (
                    <li key={index}>{note.title}</li>
                ))
                }
            </ul>
        </div>
    )
}

