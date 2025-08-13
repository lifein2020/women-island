import "../../styles/styles.scss";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
 
function App() {
  return (
    <div id="app" className="App">
      <Menu/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
