import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
      <NavBar title="Text Manipulator"/>
      <TextArea/>
    </div>
  );
}

export default App;
