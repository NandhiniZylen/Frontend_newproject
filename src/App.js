import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Routing from './Routing'

import {BrowserRouter} from 'react-router-dom';
// import  Footer from './Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Routing/>
    
    {/* <Footer/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
