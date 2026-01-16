import RemoveButton from './RemoveButton'
import personService from '../services/persons'

const Person = ({ person, deletePersonFE }) => <li>
    {person.name} {person.number} <RemoveButton removePerson={personService.remove} id={person.id} name={person.name} deletePersonFE={deletePersonFE}/>
</li>

export default Person