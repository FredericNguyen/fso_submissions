import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchPerson, setsearchPerson] = useState("")

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
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
                id: newName,
                number: newNumber
            }

            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }

    }
    const findPerson = (event) => {
        // console.log(event.target.value)
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
            <Persons foundPeople={foundPeople} />
        </div>
    )
}

export default App