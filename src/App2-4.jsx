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




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App