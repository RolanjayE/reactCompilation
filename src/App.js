import logo from './logo.svg';
import './App.css';
import ProjectOne from './component/projectOne';
import ProjectTwo from './component/projectTwo';
import ProjectThree from './component/projectThree';

function App() {

  const datas = [
    { id: "1", title: "This is a sample title", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D" },
    { id: "2", title: "This is a sample title", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "3", title: "This is a sample title", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D" },
    { id: "4", title: "This is a sample title", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D" },
    { id: "5", title: "This is a sample title", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D" },
    { id: "6", title: "This is a sample title", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" }
  ]


  return (
    <div>
      <ProjectOne />
      <ProjectTwo data={datas} />
      <ProjectThree />
    </div>
  );
}

export default App;
