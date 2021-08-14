import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Product from './pages/Product';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter >
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/product/:productId" component={ Product }  />
      <Route path="/cart" component={ Cart }  />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
