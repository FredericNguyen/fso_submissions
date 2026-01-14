import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchPerson, setsearchPerson] = useState("")

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const isDuplicate =
            persons.some((person) => person.name == newName);
        if (isDuplicate) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }

    }

    const deletePersonFE = (id)  => {
        setPersons(persons.filter(p => p.id !== id))
    }

    const findPerson = (event) => {
        setsearchPerson(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const foundPeople = persons.filter((person) => person.name.toLowerCase().includes(searchPerson.toLowerCase()))
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchPerson={searchPerson} findPerson={findPerson} />
            <h3>Add a new</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h3>Numbers</h3>
            <Persons foundPeople={foundPeople} deletePersonFE={deletePersonFE}/>
        </div>
    )
}

export default App