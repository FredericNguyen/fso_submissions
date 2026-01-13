import Person from './Person'

const Persons = ({foundPeople}) => <ul>
    {foundPeople.map(person =>
        <Person key={person.id} person={person} />
    )}
</ul>

export default Persons