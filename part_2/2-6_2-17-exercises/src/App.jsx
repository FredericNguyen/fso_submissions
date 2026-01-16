import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchPerson, setsearchPerson] = useState("")
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

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
            if (persons.some((person) => person.name == newName && person.number == newNumber)) {
                alert(`${newName} is already added to phonebook with the number ${newNumber}`)
            } else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const person = persons.find(p => p.name === newName)
                const changedPerson = { ...person, number: newNumber }
                personService
                    .update(changedPerson.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id === changedPerson.id ? returnedPerson : person))
                        setMessage(
                            `${returnedPerson.name}'s phone number successfully changed to ${returnedPerson.number}`
                        )
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    })
                    .catch(error => {
                        setErrorMessage(
                            `Information of ${person.name} has already been removed from server`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                        setPersons(persons.filter(p => p.id !== person.id))
                    })
            }
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
                    setMessage(
                        `Added ${returnedPerson.name}`
                    )
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
        }

    }

    const deletePersonFE = (id) => {
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
            <Notification message={message} />
            <ErrorMessage message={errorMessage} />
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
            <Persons foundPeople={foundPeople} deletePersonFE={deletePersonFE} />
        </div>
    )
}

export default App