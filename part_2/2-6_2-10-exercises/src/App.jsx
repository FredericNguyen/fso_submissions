import { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchPerson, setsearchPerson] = useState("")

    const addPerson = (event) => {
        event.preventDefault()
        const isDuplicate =
            persons.some((person) => person.name == newName);
        if (isDuplicate) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                id: newName,
                number: newNumber
            }

            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }

    }
    const findPerson = (event) => {
        console.log(event.target.value)
        setsearchPerson(event.target.value)
    }
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const foundPeople = persons.filter((person) => person.name.toLowerCase().includes(searchPerson.toLowerCase()))
    console.log(foundPeople)
    return (
        <div>
            <h2>Phonebook</h2>
            <p> filter shown with 
                <input type="search"
                    value={searchPerson}
                    onChange={findPerson}
                />
            </p>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {foundPeople.map(person =>
                    <Person key={person.id} person={person} />
                )}
            </ul>
        </div>
    )
}

export default App