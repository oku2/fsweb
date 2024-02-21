import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <PersonForm
        addNew={addNew}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
      />
      <h2>Numbers</h2>
      <Persons persons={persons}/>

    </div>
  )

}

export default App