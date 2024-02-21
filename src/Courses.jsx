const Courses = (props) => {
  const courses = props.courses
return (
  <>
      {courses.map(part => 
      <div key={part.id}>
        <p>
          <b>{part.name}</b>
        </p>
        <div>
          {part.parts.map(osa => <p key={osa.id}>{osa.name} {osa.exercises}</p>)}
        </div>
        <p><b>total of {part.parts.reduce((sum, osa) => sum + osa.exercises, 0)} exercises</b></p>
      </div>
      )}


  </>
)


}
  
  export default Courses