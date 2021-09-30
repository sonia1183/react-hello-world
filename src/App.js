import Button from './Button';
import './App.css';
import Form from './Form';
import logo from './logo.svg';
function App() {
  return (
    <div className="body">
      <img src={logo} alt=""/>
      <form>
      <Form/>
    <Button/>
    </form>
    </div>
  );
}

export default App;
