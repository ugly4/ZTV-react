import logotype from './logo.svg';
import './App.css';
import './variables.css'
import Header from './Header/Header';
import Main from './Main/Main'
import Footer from './Footer/Footer';

function App() {
  
  return (
    <div>
      <Header />
      <div className="Plashka"></div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
