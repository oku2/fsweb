const Course = (props) => {
    const course = props.course
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <h1>{course.name}</h1>
      <div>
      
        {course.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        )}
      </div>
      <p><b>total of {total} exercises</b></p>
    </>
  )


}




const App = () => {
  const course = {
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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App