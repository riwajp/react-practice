import "./App.css";

function App() {
  const tasks = [
    {
      title: "JSX, Components & Props",
      link: "/jsx-components-props",
      desc: "This task focuses on creating a single blog page in React by building reusable components that display post previews and page layout elements. Key components such as Header, PostPreview, Card, and Footer accept props to customize their content and appearance, allowing for flexibility and consistency throughout the page. By using props and children, these components support easy customization while maintaining a clean and organized code structure. This approach not only simplifies maintenance but also makes it easier to extend and update the blog page as needed.",
      image: "assets/screenshots/jsx-components-props.jpg",
    },
    {
      title: "Conditional Rendering and Lists",
      link: "/conditional-rendering-lists",
      desc: "This task involves building a TV Shows web page with search and genre filtering functionalities. The core of the implementation is the use of a reusable and generic React component called ListRenderer, which handles list rendering with support for loading and empty states.",
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
