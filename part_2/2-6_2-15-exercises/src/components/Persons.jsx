import Person from './Person'

const Persons = ({foundPeople, deletePersonFE}) => <ul>
    {foundPeople.map(person =>
        <Person key={person.id} person={person} deletePersonFE={deletePersonFE}/>
    )}
</ul>

export default Persons