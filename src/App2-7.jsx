import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault()
    const sameName = (element) => element.name === newName;
    console.log(sameName)

  const samePersonIndex = persons.findIndex(sameName);
    if (samePersonIndex === -1) {

      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
      setNewName("")
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    



  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => 
        <p key={person.name}>{person.name}</p>
        )}</ul>
    </div>
  )

}

export default App