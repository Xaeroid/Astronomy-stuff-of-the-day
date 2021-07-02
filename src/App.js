import Home from './Home';
import Header from './Header'
import './app.css';

function App() {
  return (
    <><div style={{ backgroundImage: "url(/univ.jpg)" }}>
    </div>
    <div className = "App">
      <Header />
        <div className = "content">
          <Home />  
        </div>    
    </div>
    </>
  );
}

export default App;
