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
      title: "State & Event Handling",
      link: "/state-event-handeling",
      desc: "In this task, I created a modal-based signup form in React with TypeScript that demonstrates effective state management and event handling using custom hooks. I built a reusable useInput hook to manage input values and onChange logic for form fields. The form is displayed in the form of a Model, that can be toggled on or off. The form  handles user input dynamically, updates state in real time, and resets all fields on submit or close. All interactions, including form submission and modal toggling, are managed through clear event-driven logic.",
      image: "assets/screenshots/state-event-handeling.png",
    },
    {
      title: "Conditional Rendering and Lists",
      link: "/conditional-rendering-lists",
      desc: "This task involves building a TV Shows web page with search and genre filtering functionalities. The core of the implementation is the use of a reusable and generic React component called ListRenderer, which handles list rendering with support for loading and empty states.",
      image: "assets/screenshots/conditional-rendering-lists.jpg",
    },
    {
      title: " useEffect & Side Effects",
      link: "/useEffect-side-effects",
      desc: "In this task, I developed a modular live scoreboard application using React and TypeScript, showcasing advanced use of state and side-effect management through both built-in and custom hooks. The project is broken down into well-defined components: a Clock component that displays the current time and updates every second using a reusable useInterval hook, and a Scoreboard component that renders a list of live football match scores along with team names and logos in a visually styled layout. The match data is loaded from a local JSON file and simulates asynchronous data fetching by introducing a loading state using setTimeout. To emulate real-time updates, the data refreshes automatically every 5 seconds using the same useInterval hook, which encapsulates interval logic with proper cleanup to avoid memory leaks. By modularizing the UI and logic into smaller components and managing repeated side effects efficiently, this task demonstrates good architectural separation, reusable hook design, and responsive updates that mimic a live sports application.",
      image: "assets/screenshots/useEffect-side-effects.png",
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
