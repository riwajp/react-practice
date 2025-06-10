import "./App.css";

function App() {
  const tasks = [
    {
      title: "JSX, Components & Props",
      link: "/jsx-components-props",
      desc: "This task involves building a blog page in React using reusable components to display posts and layout elements. Components like Header, PostPreview, Card, and Footer use props to customize their content and appearance. This approach helps keep the code organized and easy to maintain.",
      image: "assets/screenshots/jsx-components-props.jpg",
    },
    {
      title: "Conditional Rendering and Lists",
      link: "/conditional-rendering-lists",
      desc: "This task covers the basics conditional rendering and lists in React.",
      image: "assets/screenshots/conditional-rendering-lists.jpg",
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
              <div className="task-desc">{task.desc}</div>
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
