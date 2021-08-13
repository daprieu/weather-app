import logo from './logo.svg';
import './App.css';
console.log("key", process.env.REACT_APP_API_KEY)
export const weatherApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todays weather.
        </p>
      </header>
    </div>
  );
}


