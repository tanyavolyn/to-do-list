
import './App.css';
import { ToDoList } from './ToDoList';
import image from './multi-01.png';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <div >
      <img src={image} alt="Bild" width="350px" height="300px"/>
      </div>
     <div>
      <ToDoList/>
      </div>
      </div>
    </div>
  );
}

export default App;
