import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import FoodDetails from './Pages/Booking/FoodDetails/FoodDetails';
import Foods from './Pages/Foods/Foods/Foods';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
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
          <Route path="/signup">
              <Register></Register>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/meals">
              <Foods></Foods>
          </Route>
          <Route path="/food/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
        </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
