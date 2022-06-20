import "./App.css";
import Profile from "./components/Profile";
import Cards from "./components/Cards";

function App() {
  return (
    <div
      style={{ backgroundColor: "whitesmoke", height: "120vh", width: "207vh" }}
    >
      <Profile />

      <Cards />
    </div>
  );
}

export default App;
