import Navbar from "./navbar"

export default function Profile(){
    const person = {
        name : 'John',
        age:22,
        email:'john@gmail.com',
        nationality:"Nepali",
        country:"Canada"
    }
    return(
        <div>
            <Navbar/>
            <h1>Name:{person.name}</h1>
            <h1>Name:{person.age}</h1>
            <h1>Name:{person.email}</h1>
            <h1>Name:{person.nationality}</h1>
            <h1>Name:{person.country}</h1>
        </div>
    )
}