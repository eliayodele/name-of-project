import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
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
      </header>
    </div>
  );
}

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const FormHeading = () => (
  <div>
  <h1>SUBSCRIBE</h1>
  <br />
  <h3> Sign up</h3>
  </div>
)

const Form = () => (
  <div>
    <input type='text' placeholder='First Name'></input>
    <br/>
    <input type='text' placeholder='Last Name'></input>
    <br/>
    <input type='text' placeholder='Email'></input>
    <br/>
    <button>Subscribe</button>
  </div>
)
// React Component
const Header = () => {
  return header
}

const HeaderApp = () => (
  <div className='App'>
  <App />
  <Header />
  <FormHeading/>
  <Form />

  </div>
)
export default HeaderApp