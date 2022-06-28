import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import GlobalProvider from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
