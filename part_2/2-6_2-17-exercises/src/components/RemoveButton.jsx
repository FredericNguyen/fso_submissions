const RemoveButton = ({ removePerson, id,name, deletePersonFE}) => {
    return (
        <button onClick={ () => {
            if (window.confirm(`Delete ${name} ?`)) {
                removePerson(id)
                deletePersonFE(id)
            }
        }
        }
        >delete</button>
    )
}

export default RemoveButton