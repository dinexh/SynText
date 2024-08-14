import './App.css';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
        <div className="App-header">
        <Nav /> 
        </div>
        <div className="App-footer">
          <Footer/>
        </div>
    </div>
  );
}

export default App;
