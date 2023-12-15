const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Course = ({ course }) => {
  const total = course.parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);

  return (
    <div>
      <Header name={course.name} />
      {course.parts.map((part) => (
        <Content key={part.id} part={part} />
      ))}
      <strong>total of {total} exercises</strong>
    </div>
  );
};

export default Course;
