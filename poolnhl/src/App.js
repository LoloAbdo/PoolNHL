import logo from "./logo.svg";
import "./App.css";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import NavBarLeft from "./component/NavBarLeft";
function App() {
    return (
        <div className="App">
            <NavBarLeft />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <SignIn />
                <SignUp />
            </header>
        </div>
    );
}

export default App;
