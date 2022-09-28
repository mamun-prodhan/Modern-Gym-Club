import './App.css';
import Exercise from './components/Exercise/Exercise';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='row'>
      <div className="col-12 exercise-container">
        <Header></Header>
        <Exercise></Exercise>
      </div>
      <div className="col-12 bg-danger person-container">
        <h3>Person info</h3>
      </div>
    </div>
  );
}

export default App;
