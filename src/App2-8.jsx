import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')


  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault()
    const sameName = (element) => element.name === newName;

  const samePersonIndex = persons.findIndex(sameName);
    if (samePersonIndex === -1) {

      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber("")
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
        <div>number: <input value={newNumber} onChange={handleNumberInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
        )}</ul>
    </div>
  )

}

export default App