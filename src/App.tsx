import "./App.css";

function App() {
  const tasks = [
    {
      title: "JSX, Components & Props",
      link: "/jsx-components-props",
      desc: "This task covers the basics of JSX, creating components, and passing props in React.",
      image: "assets/screenshots/jsx-components-props.jpg",
    },
    {
      title: "Conditional Rendering and Lists",
      link: "/conditional-rendering-lists",
      desc: "This task covers the basics of JSX, creating components, and passing props in React.",
      image: "assets/screenshots/conditional-rendering-lists.jpg",
    },
    {
      title: "State & Event Handeling",
      link: "/state-event-handeling",
      desc: "This task covers the basics of JSX, creating components, and passing props in React.",
      image: "assets/screenshots/state-event-handeling.jpg",
    },
  ];

  return (
    <div className="tasks-container">
      <h1 className="title">Tasks</h1>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <a key={task.link} href={task.link} className="task-card">
            <div className="task-content">
              <div className="task-number">Task {index + 1}</div>
              <div className="task-title">{task.title}</div>
              <div className="task-desc">
                {task.desc}Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
            <div className="task-image">
              <img src={task.image} alt={task.title} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
