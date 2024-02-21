const PersonForm = ({ addNew, newName, handleNameInput, newNumber, handleNumberInput }) => {
    return (
        <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }
  
  export default PersonForm