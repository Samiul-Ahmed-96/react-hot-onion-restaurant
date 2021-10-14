import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
        </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
