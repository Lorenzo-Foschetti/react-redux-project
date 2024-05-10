import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MySidebar from "./components/MySidebar";
import MyMain from "./components/MyMain";
import MyPlayer from "./components/MyPlayer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MySidebar />
      <MyMain />
      <MyPlayer />
    </div>
  );
}

export default App;
